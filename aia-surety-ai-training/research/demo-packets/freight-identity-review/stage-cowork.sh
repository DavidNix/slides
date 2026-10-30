#!/usr/bin/env bash
# Stage the freight-claim demo for a Claude Cowork session.
#
#   stage-cowork.sh [stage|reset] [parent-dir]
#
#   stage    Create AIA-Freight-Live (connect this to Cowork) and
#            AIA-Freight-Presenter (never connect this) under parent-dir.
#   reset    Empty AIA-Freight-Live and restage both folders for another take.
#
# parent-dir defaults to ~/Documents.
set -euo pipefail

cmd="${1:-stage}"
parent="${2:-$HOME/Documents}"
packet="$(cd "$(dirname "$0")" && pwd)"
guide="$packet/../../../demo-freight-fraud-review.md"
live="$parent/AIA-Freight-Live"
presenter="$parent/AIA-Freight-Presenter"

stage_live() {
  mkdir -p "$live/input" "$live/output"
  cp "$packet"/input/* "$live/input/"
}

# The guide holds the prompt as its first ```text block.
extract_prompt() {
  awk '
    /^```text$/ && !done { on = 1; next }
    /^```$/ && on        { on = 0; done = 1 }
    on                   { print }
  ' "$guide"
}

stage_presenter() {
  # Rebuild from scratch so files from an older layout do not linger.
  [ "$(basename "$presenter")" = "AIA-Freight-Presenter" ] && rm -rf "$presenter"
  mkdir -p "$presenter"
  cp "$packet/presenter/answer-key.md" "$presenter/"
  cp "$packet/presenter/presenter-checklist.md" "$presenter/"
  extract_prompt > "$presenter/prompt.txt"
  [ -s "$presenter/prompt.txt" ] ||
    { echo "Could not extract the prompt from $guide" >&2; exit 1; }
}

case "$cmd" in
  stage)
    if [ -e "$live" ]; then
      echo "$live already exists. Use 'reset' to restage it." >&2
      exit 1
    fi
    stage_live
    stage_presenter
    ;;
  reset)
    # Empty the folder instead of deleting it, so Cowork keeps its folder grant.
    [ "$(basename "$live")" = "AIA-Freight-Live" ] && [ -d "$live/input" ] ||
      { echo "No staged demo at $live" >&2; exit 1; }
    find "$live" -mindepth 1 -delete
    stage_live
    stage_presenter
    ;;
  *)
    echo "Usage: $0 [stage|reset] [parent-dir]" >&2
    exit 1
    ;;
esac

echo "Connect to Cowork:  $live"
echo "Keep off-camera:    $presenter"
find "$live" -type f | sed "s|^$live/|  |" | sort
