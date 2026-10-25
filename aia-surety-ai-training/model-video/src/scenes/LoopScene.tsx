import {interpolate, interpolateColors, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, SceneFrame, SceneTitle} from '../components';
import {C, alpha, clamp} from '../theme';

const BASE = 'Please send the missing financial';
// The first token was picked in the softmax scene. The rest come one per cycle.
const NEW_TOKENS = [' statements', ' by', ' Friday', '.'];
const FIRST_CYCLE = 40;
const CYCLE = 60;
const appearAt = (k: number) => (k === 0 ? 0 : FIRST_CYCLE + CYCLE * k);

const BOX_Y = 600;
const BOX_H = 130;
const BOXES = [
	{label: 'Tokens', cx: 370, w: 260},
	{label: 'Transformer layers', cx: 800, w: 420},
	{label: 'Softmax', cx: 1210, w: 260},
	{label: 'Next token', cx: 1580, w: 280},
];
const LOOP_Y = 780;
const RETURN_LEN = 2 * (LOOP_Y - BOX_Y - BOX_H / 2) + (BOXES[3].cx - BOXES[0].cx);
const FORWARD_SHARE = 0.7;

const pulseAt = (u: number) => {
	const left = BOXES[0].cx;
	const right = BOXES[3].cx;
	if (u < FORWARD_SHARE) {
		return {x: left + (right - left) * (u / FORWARD_SHARE), y: BOX_Y};
	}
	const drop = LOOP_Y - BOX_Y - BOX_H / 2;
	const s = ((u - FORWARD_SHARE) / (1 - FORWARD_SHARE)) * RETURN_LEN;
	if (s < drop) {
		return {x: right, y: BOX_Y + BOX_H / 2 + s};
	}
	if (s < drop + (right - left)) {
		return {x: right - (s - drop), y: LOOP_Y};
	}
	return {x: left, y: LOOP_Y - (s - drop - (right - left))};
};

export const LoopScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const lastCycleEnd = appearAt(NEW_TOKENS.length - 1);
	const running = frame >= FIRST_CYCLE && frame < lastCycleEnd;
	const u = running ? ((frame - FIRST_CYCLE) % CYCLE) / CYCLE : -1;
	const pulse = running ? pulseAt(u) : null;
	const activeBox =
		pulse && u < FORWARD_SHARE
			? BOXES.findIndex((b) => Math.abs(pulse.x - b.cx) < b.w / 2)
			: -1;

	return (
		<SceneFrame>
			<SceneTitle step="Step 5">Add it on, and repeat</SceneTitle>
			<div
				style={{
					position: 'absolute',
					top: 285,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontSize: 60,
					fontWeight: 600,
					whiteSpace: 'pre',
				}}
			>
				{BASE}
				{NEW_TOKENS.map((token, k) => {
					const at = appearAt(k);
					const shown = interpolate(frame, [at, at + 8], [0, 1], clamp);
					return (
						<span
							key={token}
							style={{
								opacity: shown,
								color: interpolateColors(frame, [at + 20, at + 50], [C.accent, C.text]),
							}}
						>
							{token}
						</span>
					);
				})}
			</div>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<defs>
					<marker id="head" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={5} markerHeight={5} orient="auto">
						<path d="M 0 0 L 10 5 L 0 10 z" fill={C.muted} />
					</marker>
				</defs>
				{BOXES.slice(0, -1).map((b, i) => (
					<line
						key={b.label}
						x1={b.cx + b.w / 2 + 8}
						y1={BOX_Y}
						x2={BOXES[i + 1].cx - BOXES[i + 1].w / 2 - 10}
						y2={BOX_Y}
						stroke={C.muted}
						strokeWidth={5}
						markerEnd="url(#head)"
					/>
				))}
				<path
					d={`M ${BOXES[3].cx} ${BOX_Y + BOX_H / 2 + 8} V ${LOOP_Y} H ${BOXES[0].cx} V ${BOX_Y + BOX_H / 2 + 12}`}
					fill="none"
					stroke={C.muted}
					strokeWidth={5}
					strokeDasharray="14 12"
					markerEnd="url(#head)"
				/>
				{BOXES.map((b, i) => (
					<rect
						key={b.label}
						x={b.cx - b.w / 2}
						y={BOX_Y - BOX_H / 2}
						width={b.w}
						height={BOX_H}
						rx={24}
						fill={i === activeBox ? alpha(C.accent, 0.2) : C.panel}
						stroke={i === activeBox ? C.accent : C.line}
						strokeWidth={4}
					/>
				))}
				{pulse && activeBox === -1 ? (
					<circle cx={pulse.x} cy={pulse.y} r={14} fill={C.accent} />
				) : null}
			</svg>
			{BOXES.map((b) => (
				<div
					key={b.label}
					style={{
						position: 'absolute',
						left: b.cx - b.w / 2,
						top: BOX_Y - BOX_H / 2,
						width: b.w,
						height: BOX_H,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 40,
						fontWeight: 600,
					}}
				>
					{b.label}
				</div>
			))}
			<div
				style={{
					position: 'absolute',
					top: LOOP_Y - 26,
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<span style={{backgroundColor: C.bg, padding: '0 24px', fontSize: 36, color: C.muted}}>
					add it to the text
				</span>
			</div>
			<Caption from={0} to={4.3 * fps}>
				The chosen token is added to the end of the text.
			</Caption>
			<Caption from={4.3 * fps} to={9 * fps}>
				Then the whole process runs again, one token at a time, until the answer is done.
			</Caption>
		</SceneFrame>
	);
};
