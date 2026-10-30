import {interpolate, interpolateColors, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, SceneFrame, SceneTitle} from '../components';
import {C, PROMPT_TOKENS, TOKEN_COLORS, alpha, clamp} from '../theme';

// Column 0 holds the input tokens. Columns 1 to 4 are layers. Column 5 is the output.
const COL_X = [360, 620, 860, 1100, 1420, 1680];
const LAYER_LABELS = ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 80'];
const ROW_Y = PROMPT_TOKENS.map((_, i) => 330 + i * 105);
const OUT_Y = 540;
const MIX_COLOR = '#d6c8ff';
// The gap between layer 3 and the last layer stands for many hidden layers.
const SKIP_GAP = 3;

const nodeColor = (col: number, row: number) =>
	interpolateColors(col / 4, [0, 1], [TOKEN_COLORS[row], MIX_COLOR]);

export const TransformerScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	// The signal front, measured in columns.
	const p = interpolate(frame, [0.5 * fps, 8.5 * fps], [0, 5], clamp);
	const litOf = (col: number) =>
		col === 0 ? 1 : interpolate(p, [col - 0.15, col], [0, 1], clamp);

	const edges: React.ReactNode[] = [];
	for (let g = 0; g < 5; g++) {
		const local = interpolate(p, [g, g + 1], [0, 1], clamp);
		const targets = g === 4 ? [OUT_Y] : ROW_Y;
		ROW_Y.forEach((y1, i) => {
			targets.forEach((y2, j) => {
				const x1 = COL_X[g] + 24;
				const x2 = COL_X[g + 1] - (g === 4 ? 90 : 24);
				const key = `${g}-${i}-${j}`;
				const dash = g === SKIP_GAP ? '10 14' : undefined;
				const color = g === 4 ? C.accent : nodeColor(g + 1, j);
				edges.push(
					<g key={key}>
						<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.line} strokeWidth={2} strokeDasharray={dash} />
						{local > 0 ? (
							<line
								x1={x1}
								y1={y1}
								x2={x1 + (x2 - x1) * local}
								y2={y1 + (y2 - y1) * local}
								stroke={color}
								strokeWidth={2.5}
								strokeOpacity={0.45}
								strokeDasharray={dash}
							/>
						) : null}
						{local > 0 && local < 1 ? (
							<circle
								cx={x1 + (x2 - x1) * local}
								cy={y1 + (y2 - y1) * local}
								r={6}
								fill={C.text}
							/>
						) : null}
					</g>,
				);
			});
		});
	}

	const outLit = litOf(5);

	return (
		<SceneFrame>
			<SceneTitle step="Step 3">The transformer: layers of simple math</SceneTitle>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{[1, 2, 3, 4].map((col) => (
					<rect
						key={col}
						x={COL_X[col] - 60}
						y={ROW_Y[0] - 60}
						width={120}
						height={ROW_Y[4] - ROW_Y[0] + 120}
						rx={28}
						fill={C.panel}
						stroke={alpha(C.blue, 0.15 + 0.6 * litOf(col) * (1 - litOf(col + 1) * 0.6))}
						strokeWidth={3}
					/>
				))}
				{edges}
				{COL_X.slice(0, 5).map((x, col) =>
					ROW_Y.map((y, row) => {
						const lit = litOf(col);
						const pop = interpolate(p, [col, col + 0.25, col + 0.6], [1, 1.35, 1], clamp);
						return (
							<circle
								key={`${col}-${row}`}
								cx={x}
								cy={y}
								r={22 * (col === 0 ? 1 : pop)}
								fill={interpolateColors(lit, [0, 1], [C.line, nodeColor(col, row)])}
							/>
						);
					}),
				)}
				<rect
					x={COL_X[5] - 90}
					y={OUT_Y - 50}
					width={180}
					height={100}
					rx={22}
					fill={interpolateColors(outLit, [0, 1], [C.panel, alpha(C.accent, 0.25)])}
					stroke={interpolateColors(outLit, [0, 1], [C.line, C.accent])}
					strokeWidth={4}
				/>
			</svg>
			<div
				style={{
					position: 'absolute',
					left: COL_X[5] - 90,
					top: OUT_Y - 50,
					width: 180,
					height: 100,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: 38,
					fontWeight: 800,
					color: interpolateColors(outLit, [0, 1], [C.muted, C.accent]),
				}}
			>
				Scores
			</div>
			{PROMPT_TOKENS.map((token, i) => (
				<div
					key={token}
					style={{
						position: 'absolute',
						right: 1920 - COL_X[0] + 40,
						top: ROW_Y[i] - 24,
						fontSize: 40,
						fontWeight: 600,
						color: TOKEN_COLORS[i],
					}}
				>
					{token}
				</div>
			))}
			{LAYER_LABELS.map((label, k) => (
				<div
					key={label}
					style={{
						position: 'absolute',
						left: COL_X[k + 1] - 100,
						top: ROW_Y[4] + 74,
						width: 200,
						textAlign: 'center',
						fontSize: 34,
						fontWeight: 600,
						color: C.muted,
					}}
				>
					{label}
				</div>
			))}
			<div
				style={{
					position: 'absolute',
					left: (COL_X[3] + COL_X[4]) / 2 - 100,
					top: OUT_Y - 60,
					width: 200,
					textAlign: 'center',
					fontSize: 80,
					fontWeight: 800,
					color: C.muted,
					backgroundColor: C.bg,
					borderRadius: 20,
				}}
			>
				⋯
			</div>
			<Caption from={0} to={3.5 * fps}>
				The token numbers flow through a stack of layers.
			</Caption>
			<Caption from={3.5 * fps} to={6.5 * fps}>
				Each layer uses attention to mix in context, then does more math.
			</Caption>
			<Caption from={6.5 * fps} to={8.8 * fps}>
				Large models stack many layers, with billions of learned numbers.
			</Caption>
			<Caption from={8.8 * fps} to={11 * fps}>
				Out the other end comes a score for every possible next token.
			</Caption>
		</SceneFrame>
	);
};
