import {interpolate, interpolateColors, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, SceneFrame} from '../components';
import {C, alpha, clamp, ease, monoFamily} from '../theme';

// Teaching numbers, not measured model output. One row of odds per prompt state.
const WORDS = ['approved', 'ready', 'active', 'pending', 'on hold', 'denied'];
const STATES = [
	[0.28, 0.22, 0.16, 0.14, 0.08, 0.06],
	[0.05, 0.03, 0.02, 0.52, 0.27, 0.06],
	[0.71, 0.13, 0.07, 0.03, 0.01, 0.01],
];
const CONTEXT = [
	'Note: financial statements still missing.',
	'Note: all documents received and signed off.',
];
// Rank 0 is the most likely word in that state.
const RANKS = STATES.map((p) => {
	const order = p.map((_, i) => i).sort((a, b) => p[b] - p[a]);
	return p.map((_, i) => order.indexOf(i));
});

const CARD_LEFT = 260;
const ROW_TOP = 480;
const ROW_STEP = 64;
const BAR_X = 600;
const BAR_SCALE = 1300;
// The highlight steps through these words before it stops on "approved".
const ROLL = [3, 1, 0, 2, 0, 1, 0];

export const OddsScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s1 = interpolate(frame, [7.4 * fps, 8.6 * fps], [0, 1], {...clamp, easing: ease});
	const s2 = interpolate(frame, [13.6 * fps, 14.8 * fps], [0, 1], {...clamp, easing: ease});
	// Blends a per-state value. s2 only moves after s1 has finished.
	const mix = (v: readonly number[]) => v[0] + (v[1] - v[0]) * s1 + (v[2] - v[1]) * s2;

	const typed1 = Math.round(interpolate(frame, [6.2 * fps, 7.2 * fps], [0, CONTEXT[0].length], clamp));
	const typed2 = Math.round(interpolate(frame, [12.7 * fps, 13.5 * fps], [0, CONTEXT[1].length], clamp));
	const second = frame >= 12.6 * fps;
	const contextText = second ? CONTEXT[1].slice(0, typed2) : CONTEXT[0].slice(0, typed1);
	const contextOpacity = second ? 1 : interpolate(frame, [12.2 * fps, 12.6 * fps], [1, 0], clamp);
	const typing =
		(frame >= 6.2 * fps && typed1 < CONTEXT[0].length) || (second && typed2 < CONTEXT[1].length);
	const placeholder = interpolate(frame, [5.8 * fps, 6.2 * fps], [1, 0], clamp);
	const slotGlow = interpolate(frame, [6.2 * fps, 6.5 * fps], [0, 1], clamp);

	const rollStart = 18.8 * fps;
	const rollStep = Math.floor(
		interpolate(frame, [rollStart, 20.6 * fps], [0, ROLL.length - 1], {
			...clamp,
			easing: (x) => Math.sqrt(x),
		}),
	);
	const selected = frame >= rollStart ? ROLL[rollStep] : -1;
	const landed = frame >= 20.6 * fps;
	const fill = interpolate(frame, [20.8 * fps, 21.3 * fps], [0, 1], {...clamp, easing: ease});
	const cardIn = interpolate(frame, [0, 15], [0, 1], clamp);

	return (
		<SceneFrame>
			<div
				style={{
					position: 'absolute',
					top: 90,
					left: CARD_LEFT,
					right: CARD_LEFT,
					padding: '28px 40px',
					borderRadius: 24,
					backgroundColor: C.panel,
					border: `3px solid ${C.line}`,
					opacity: cardIn,
					translate: interpolate(frame, [0, 20], ['0px 20px', '0px 0px'], {...clamp, easing: ease}),
				}}
			>
				<div
					style={{
						fontSize: 28,
						fontWeight: 600,
						letterSpacing: 4,
						color: C.accent,
						marginBottom: 12,
					}}
				>
					PROMPT
				</div>
				<div style={{fontFamily: monoFamily, fontSize: 42, lineHeight: '64px'}}>
					<div
						style={{
							position: 'relative',
							paddingLeft: 20,
							marginLeft: -20,
							borderLeft: `6px solid ${alpha(C.accent, slotGlow)}`,
							backgroundColor: alpha(C.accent, 0.08 * slotGlow),
							borderRadius: 6,
						}}
					>
						<span style={{position: 'absolute', color: C.gray, opacity: placeholder}}>
							(no extra context)
						</span>
						<span style={{color: C.accent, opacity: contextOpacity}}>
							{contextText}
							{typing ? '▍' : ''}
						</span>
						{/* Holds the line height when the slot is empty. */}
						&nbsp;
					</div>
					<div>Write a short reply to the client.</div>
					<div style={{display: 'flex', alignItems: 'baseline', gap: 24}}>
						<span>Your bond is</span>
						<span
							style={{
								display: 'inline-block',
								minWidth: 220,
								borderBottom: `5px solid ${C.accent}`,
								color: C.accent,
								fontWeight: 700,
							}}
						>
							<span
								style={{
									display: 'inline-block',
									opacity: fill,
									scale: interpolate(fill, [0, 1], [0.6, 1]),
								}}
							>
								approved
							</span>
						</span>
					</div>
				</div>
			</div>
			<div
				style={{
					position: 'absolute',
					top: ROW_TOP - 66,
					left: CARD_LEFT,
					fontSize: 34,
					fontWeight: 600,
					color: C.muted,
					opacity: interpolate(frame, [10, 25], [0, 1], clamp),
				}}
			>
				Next-word probabilities (illustrative)
			</div>
			{WORDS.map((word, i) => {
				const rowIn = interpolate(frame, [15 + i * 5, 30 + i * 5], [0, 1], {...clamp, easing: ease});
				const p = mix(STATES.map((s) => s[i]));
				const y = ROW_TOP + mix(RANKS.map((r) => r[i])) * ROW_STEP;
				const lead = mix(RANKS.map((r) => (r[i] === 0 ? 1 : 0)));
				const width = p * BAR_SCALE * rowIn;
				const isSelected = selected === i;
				const isPick = landed && isSelected;
				return (
					<div key={word} style={{opacity: rowIn}}>
						<div
							style={{
								position: 'absolute',
								left: CARD_LEFT - 20,
								top: y - 8,
								width: 1440,
								height: ROW_STEP - 6,
								borderRadius: 16,
								border: `4px solid ${isSelected ? C.accent : 'transparent'}`,
								backgroundColor: isSelected ? alpha(C.accent, isPick ? 0.16 : 0.08) : 'transparent',
								boxShadow: isPick ? `0 0 40px ${alpha(C.accent, 0.5)}` : undefined,
							}}
						/>
						<div
							style={{
								position: 'absolute',
								left: CARD_LEFT,
								top: y,
								width: BAR_X - CARD_LEFT - 40,
								textAlign: 'right',
								fontSize: 42,
								fontWeight: 600,
							}}
						>
							{word}
						</div>
						<div
							style={{
								position: 'absolute',
								left: BAR_X,
								top: y + 6,
								width: Math.max(4, width),
								height: 40,
								borderRadius: 10,
								backgroundColor: interpolateColors(lead, [0, 1], [C.blue, C.accent]),
							}}
						/>
						<div
							style={{
								position: 'absolute',
								left: BAR_X + width + 22,
								top: y,
								fontSize: 42,
								fontWeight: 800,
								fontVariantNumeric: 'tabular-nums',
								whiteSpace: 'nowrap',
							}}
						>
							{Math.round(p * 100)}%
						</div>
					</div>
				);
			})}
			<Caption from={0} to={6 * fps}>
				The model gives every possible next word a probability.
			</Caption>
			<Caption from={6 * fps} to={12.2 * fps}>
				Add one fact, and the odds shift toward words that fit it.
			</Caption>
			<Caption from={12.2 * fps} to={18.5 * fps}>
				Change the fact, and the likely answer changes with it.
			</Caption>
			<Caption from={18.5 * fps} to={24 * fps}>
				Then it picks one word by chance, weighted by these odds.
			</Caption>
		</SceneFrame>
	);
};
