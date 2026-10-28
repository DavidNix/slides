#!/usr/bin/env bash
# Stage the freight-claim demo for a Claude Cowork session.
#
#   stage-cowork.sh [stage|replies|reset] [parent-dir]
#
#   stage    Create AIA-Freight-Live (connect this to Cowork) and
#            AIA-Freight-Presenter (never connect this) under parent-dir.
#   replies  Copy the three staged replies into AIA-Freight-Live/input/.
#   reset    Empty AIA-Freight-Live and restage it for another take.
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
  cp "$packet"/initial/* "$live/input/"
}

# The guide holds the two prompts as the first and second ```text blocks.
extract_prompt() {
  awk -v want="$1" '
    /^```text$/ { n++; if (n == want) { on = 1; next } }
    /^```$/     { on = 0 }
    on          { print }
  ' "$guide"
}

stage_presenter() {
  mkdir -p "$presenter/replies"
  cp "$packet"/presenter/replies/* "$presenter/replies/"
  cp "$packet/presenter/answer-key.md" "$presenter/"
  extract_prompt 1 > "$presenter/prompt-1.txt"
  extract_prompt 2 > "$presenter/prompt-2.txt"
  cp "$packet/presenter/recording-checklist.md" "$presenter/"
  [ -s "$presenter/prompt-1.txt" ] && [ -s "$presenter/prompt-2.txt" ] ||
    { echo "Could not extract the prompts from $guide" >&2; exit 1; }
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
  replies)
    cp "$packet"/presenter/replies/* "$live/input/"
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
    echo "Usage: $0 [stage|replies|reset] [parent-dir]" >&2
    exit 1
    ;;
esac

echo "Connect to Cowork:  $live"
echo "Keep off-camera:    $presenter"
find "$live" -type f | sed "s|^$live/|  |" | sort
