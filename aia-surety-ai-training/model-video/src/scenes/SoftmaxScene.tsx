import {interpolate, interpolateColors, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, SceneFrame, SceneTitle} from '../components';
import {C, alpha, clamp, ease} from '../theme';

// Teaching scores, not measured model output. Softmax below is the real formula.
const CANDIDATES = [
	{token: 'statements', score: 8.1},
	{token: 'records', score: 6.6},
	{token: 'documents', score: 5.9},
	{token: 'report', score: 5.6},
	{token: 'information', score: 5.0},
	{token: 'aid', score: 4.3},
];
const expScores = CANDIDATES.map((c) => Math.exp(c.score));
// Stands for the combined weight of every token not shown.
const OTHER_MASS = Math.exp(5.7);
const expTotal = expScores.reduce((a, b) => a + b, 0) + OTHER_MASS;
const OTHER_PROB = OTHER_MASS / expTotal;
const PROBS = expScores.map((e) => e / expTotal);

const ROW_TOP = 420;
const ROW_STEP = 64;
const BAR_X = 660;
// The highlight steps through these rows before it stops on the pick.
const ROLL = [2, 0, 3, 1, 0, 4, 0];

export const SoftmaxScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = interpolate(frame, [4.3 * fps, 6 * fps], [0, 1], {...clamp, easing: ease});
	const rollStart = 7.5 * fps;
	const rollStep = Math.floor(
		interpolate(frame, [rollStart, 9.3 * fps], [0, ROLL.length - 1], {
			...clamp,
			easing: (x) => Math.sqrt(x),
		}),
	);
	const selected = frame >= rollStart ? ROLL[rollStep] : -1;
	const landed = frame >= 9.3 * fps;
	const fill = interpolate(frame, [9.5 * fps, 10 * fps], [0, 1], {...clamp, easing: ease});
	const pill = interpolate(frame, [3.8 * fps, 4.2 * fps, 6.6 * fps, 7 * fps], [0, 1, 1, 0], clamp);

	return (
		<SceneFrame>
			<SceneTitle step="Step 4">Softmax: scores become probabilities</SceneTitle>
			<div
				style={{
					position: 'absolute',
					top: 255,
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'baseline',
					gap: 18,
					fontSize: 58,
					fontWeight: 600,
				}}
			>
				<span>Please send the missing financial</span>
				<span
					style={{
						display: 'inline-block',
						minWidth: 320,
						borderBottom: `6px solid ${C.accent}`,
						color: C.accent,
						opacity: 1,
						textAlign: 'left',
					}}
				>
					<span
						style={{
							display: 'inline-block',
							opacity: fill,
							scale: interpolate(fill, [0, 1], [0.6, 1]),
						}}
					>
						statements
					</span>
				</span>
			</div>
			<div
				style={{
					position: 'absolute',
					top: ROW_TOP - 78,
					left: BAR_X,
					fontSize: 36,
					fontWeight: 600,
					color: C.muted,
				}}
			>
				<span style={{opacity: 1 - t}}>Raw scores</span>
				<span style={{position: 'absolute', left: 0, whiteSpace: 'nowrap', opacity: t}}>
					Probabilities (all tokens add up to 100%)
				</span>
			</div>
			<div
				style={{
					position: 'absolute',
					top: ROW_TOP - 92,
					left: 1380,
					padding: '10px 28px',
					borderRadius: 40,
					backgroundColor: alpha(C.accent, 0.18),
					border: `3px solid ${C.accent}`,
					color: C.accent,
					fontSize: 38,
					fontWeight: 800,
					opacity: pill,
					boxShadow: `0 0 ${50 * Math.sin(t * Math.PI)}px ${C.accent}`,
				}}
			>
				softmax
			</div>
			{CANDIDATES.map((c, i) => {
				const y = ROW_TOP + i * ROW_STEP;
				const rowIn = interpolate(frame, [8 + i * 6, 22 + i * 6], [0, 1], {...clamp, easing: ease});
				const width = interpolate(t, [0, 1], [c.score * 84, PROBS[i] * 1000]) * rowIn;
				const isSelected = selected === i;
				const isPick = landed && i === 0;
				const barColor = interpolateColors(t, [0, 1], [C.gray, i === 0 ? C.accent : C.blue]);
				return (
					<div key={c.token} style={{opacity: rowIn}}>
						<div
							style={{
								position: 'absolute',
								left: 260,
								top: y - 8,
								width: 1440,
								height: ROW_STEP - 8,
								borderRadius: 16,
								border: `4px solid ${isSelected ? C.accent : 'transparent'}`,
								backgroundColor: isSelected ? alpha(C.accent, isPick ? 0.16 : 0.08) : 'transparent',
								boxShadow: isPick ? `0 0 40px ${alpha(C.accent, 0.5)}` : undefined,
							}}
						/>
						<div
							style={{
								position: 'absolute',
								left: 260,
								top: y,
								width: 360,
								textAlign: 'right',
								fontSize: 42,
								fontWeight: 600,
							}}
						>
							{c.token}
						</div>
						<div
							style={{
								position: 'absolute',
								left: BAR_X,
								top: y + 6,
								width: Math.max(4, width),
								height: 40,
								borderRadius: 10,
								backgroundColor: barColor,
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
								color: C.text,
								whiteSpace: 'nowrap',
							}}
						>
							<span style={{opacity: 1 - t}}>{c.score.toFixed(1)}</span>
							<span style={{position: 'absolute', left: 0, opacity: t}}>
								{Math.round(PROBS[i] * 100)}%
							</span>
						</div>
					</div>
				);
			})}
			<div
				style={{
					position: 'absolute',
					top: ROW_TOP + CANDIDATES.length * ROW_STEP,
					left: 0,
					right: 0,
					opacity: t,
					color: C.muted,
					fontSize: 42,
					fontWeight: 600,
				}}
			>
				<div style={{position: 'absolute', left: 260, width: 360, textAlign: 'right'}}>
					all others
				</div>
				<div
					style={{
						position: 'absolute',
						left: BAR_X,
						top: 6,
						width: OTHER_PROB * 1000,
						height: 40,
						borderRadius: 10,
						backgroundColor: C.gray,
					}}
				/>
				<div style={{position: 'absolute', left: BAR_X + OTHER_PROB * 1000 + 22, fontWeight: 800}}>
					{Math.round(OTHER_PROB * 100)}%
				</div>
			</div>
			<Caption from={0} to={4 * fps}>
				The model gives every possible next token a raw score.
			</Caption>
			<Caption from={4 * fps} to={7.3 * fps}>
				Softmax turns the scores into probabilities that add up to 100%.
			</Caption>
			<Caption from={7.3 * fps} to={12 * fps}>
				It picks one, weighted by the odds. This time: “statements”.
			</Caption>
		</SceneFrame>
	);
};
