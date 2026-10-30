import type React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, SceneFrame} from '../components';
import {C, alpha, clamp, ease, monoFamily} from '../theme';

const GREEN = '#06d6a0';
const ORANGE = '#ff8a5b';
const PURPLE = '#b388ff';

// Seconds at which each beat starts, plus the scene end.
const BEATS = [0, 3, 6, 9.5, 12, 15] as const;
export const SKILL_SCENE_SECONDS = BEATS[5];

const STEPS = ['1 · Names only', '2 · The task', '3 · The match', '4 · The load', '5 · The work'];

const CAPTIONS = [
	'At start, the agent sees only skill names and descriptions.',
	'You give a task. You do not name a skill.',
	'The model matches the task to a description.',
	'The harness loads the full instructions into the context.',
	'The agent follows the steps. Excel and Word skills load too.',
];

// The shelf, from slide 021. The last skill matches the task.
const SKILLS = [
	{name: 'xlsx', description: 'Build spreadsheets'},
	{name: 'docx', description: 'Write Word documents'},
	{name: 'freight-claim-review', description: 'Review a freight claim'},
];

const SKILL_STEPS = [
	"List the broker's facts",
	"Check against carrier's documents",
	'Build the evidence sheet',
	'Draft questions. Decide nothing.',
	'Write the case note',
];

const OUTPUTS = ['evidence.xlsx', 'case-note.docx'];

type Rect = {readonly x: number; readonly y: number; readonly w: number; readonly h: number};

// Layout, in composition pixels.
const SHELF: Rect = {x: 80, y: 260, w: 540, h: 590};
const CARD = (i: number): Rect => ({x: 110, y: 350 + i * 160, w: 480, h: 140});
const MODEL: Rect = {x: 720, y: 280, w: 340, h: 120};
const HARNESS: Rect = {x: 720, y: 520, w: 340, h: 120};
const CONTEXT: Rect = {x: 1160, y: 260, w: 680, h: 590};
const ROW_LIST: Rect = {x: 1190, y: 350, w: 620, h: 110};
const ROW_TASK: Rect = {x: 1190, y: 476, w: 620, h: 90};
const ROW_SKILL: Rect = {x: 1190, y: 582, w: 620, h: 250};
const OUTPUT = (i: number): Rect => ({x: 720, y: 690 + i * 80, w: 340, h: 64});

const at = (r: Rect): React.CSSProperties => ({
	position: 'absolute',
	left: r.x,
	top: r.y,
	width: r.w,
	height: r.h,
	boxSizing: 'border-box',
});

const Box: React.FC<{
	readonly rect: Rect;
	readonly color: string;
	readonly opacity: number;
	readonly glow?: number;
	readonly fill?: number;
	readonly children: React.ReactNode;
}> = ({rect, color, opacity, glow = 0, fill = 0.12, children}) => (
	<div
		style={{
			...at(rect),
			border: `4px solid ${color}`,
			backgroundColor: alpha(color, fill),
			borderRadius: 18,
			padding: '14px 22px',
			opacity,
			boxShadow: `0 0 ${50 * glow}px ${alpha(color, 0.8 * glow)}`,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			gap: 6,
		}}
	>
		{children}
	</div>
);

const PanelTitle: React.FC<{readonly rect: Rect; readonly children: React.ReactNode}> = ({
	rect,
	children,
}) => (
	<div
		style={{
			position: 'absolute',
			left: rect.x + 30,
			top: rect.y + 22,
			fontSize: 40,
			fontWeight: 800,
		}}
	>
		{children}
	</div>
);

export const SkillScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = (s: number) => s * fps;
	// 0 to 1 over a short fade that starts at `s` seconds.
	const fadeIn = (s: number, len = 12) => interpolate(frame, [t(s), t(s) + len], [0, 1], clamp);
	// Visible from `from` to `to` seconds, with short fades at each end.
	const window = (from: number, to: number) =>
		interpolate(frame, [t(from), t(from) + 10, t(to) - 10, t(to)], [0, 1, 1, 0], clamp);

	const next = STEPS.findIndex((_, i) => frame < t(BEATS[i + 1]));
	const beat = next === -1 ? STEPS.length - 1 : next;

	// Beat 3: the model matches the description and asks for the skill.
	const match = fadeIn(6.6);
	// Beat 4: the skill comes off the shelf, through the harness, into the context.
	const fly = interpolate(frame, [t(9.8), t(11)], [0, 1], {...clamp, easing: ease});
	const loaded = fadeIn(11);
	// Beat 5: steps tick off, and the premade skills light up for the outputs.
	const stepDone = (i: number) => fadeIn(12.2 + i * 0.4, 6);
	const premade = window(13.2, 15);

	const from = CARD(2);
	const ghost: Rect = {
		x: interpolate(fly, [0, 1], [from.x, ROW_SKILL.x]),
		y: interpolate(fly, [0, 1], [from.y, ROW_SKILL.y]),
		w: interpolate(fly, [0, 1], [from.w, ROW_SKILL.w]),
		h: interpolate(fly, [0, 1], [from.h, ROW_SKILL.h]),
	};

	const midY = (r: Rect) => r.y + r.h / 2;

	return (
		<SceneFrame>
			{/* Header: a fixed title and a step label that changes per beat. */}
			<div style={{position: 'absolute', top: 80, left: 0, right: 0, textAlign: 'center'}}>
				<div style={{fontSize: 72, fontWeight: 800, opacity: fadeIn(0, 15)}}>
					How an agent picks up a skill
				</div>
				<div
					key={beat}
					style={{
						fontSize: 38,
						fontWeight: 600,
						color: C.accent,
						letterSpacing: 4,
						textTransform: 'uppercase',
						marginTop: 8,
						opacity: fadeIn(BEATS[beat]),
					}}
				>
					{STEPS[beat]}
				</div>
			</div>

			{/* Panels. */}
			{[SHELF, CONTEXT].map((r) => (
				<div
					key={r.x}
					style={{
						...at(r),
						border: `3px solid ${C.line}`,
						backgroundColor: C.panel,
						borderRadius: 24,
						opacity: fadeIn(0.2),
					}}
				/>
			))}
			<div style={{opacity: fadeIn(0.2)}}>
				<PanelTitle rect={SHELF}>Skill shelf</PanelTitle>
				<PanelTitle rect={CONTEXT}>Context window</PanelTitle>
			</div>

			{/* Connectors: shelf to harness, harness to context, harness to model. */}
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<g stroke={C.gray} strokeWidth={4} opacity={fadeIn(0.5)}>
					<line x1={SHELF.x + SHELF.w} y1={midY(HARNESS)} x2={HARNESS.x} y2={midY(HARNESS)} />
					<line
						x1={HARNESS.x + HARNESS.w}
						y1={midY(HARNESS)}
						x2={CONTEXT.x}
						y2={midY(HARNESS)}
					/>
					<line
						x1={MODEL.x + MODEL.w / 2}
						y1={MODEL.y + MODEL.h}
						x2={HARNESS.x + HARNESS.w / 2}
						y2={HARNESS.y}
					/>
				</g>
			</svg>

			{/* The shelf: name and one-line description per skill. */}
			{SKILLS.map((s, i) => {
				const isMatch = i === 2;
				const color = isMatch && match > 0 ? ORANGE : i < 2 && premade > 0 ? C.blue : C.gray;
				const glow = isMatch ? match * (1 - loaded) : premade;
				return (
					<Box key={s.name} rect={CARD(i)} color={color} opacity={fadeIn(0.4 + i * 0.2)} glow={glow}>
						<div style={{fontFamily: monoFamily, fontSize: 32, fontWeight: 700}}>{s.name}</div>
						<div style={{fontSize: 30, color: C.muted}}>{s.description}</div>
					</Box>
				);
			})}

			<Box rect={MODEL} color={PURPLE} opacity={fadeIn(0.6)} glow={window(6.4, 9.5)}>
				<div style={{fontSize: 44, fontWeight: 800, textAlign: 'center'}}>AI model</div>
			</Box>
			<Box rect={HARNESS} color={C.accent} opacity={fadeIn(0.8)} glow={window(9.5, 11.2)}>
				<div style={{fontSize: 44, fontWeight: 800, textAlign: 'center'}}>Harness</div>
			</Box>

			{/* Beat 3: the model's request to the harness. */}
			<div
				style={{
					position: 'absolute',
					left: MODEL.x + MODEL.w / 2 + 20,
					top: MODEL.y + MODEL.h + 30,
					fontFamily: monoFamily,
					fontSize: 30,
					color: PURPLE,
					backgroundColor: C.bg,
					padding: '6px 12px',
					borderRadius: 10,
					border: `3px solid ${PURPLE}`,
					opacity: window(7.6, 10),
				}}
			>
				load skill
			</div>

			{/* Context rows. */}
			<Box rect={ROW_LIST} color={C.gray} opacity={fadeIn(1.2)} fill={0.18}>
				<div style={{fontSize: 30, color: C.muted}}>Skill list: names + one line each</div>
				<div style={{fontFamily: monoFamily, fontSize: 26}}>
					xlsx · docx ·{' '}
					<span style={{color: match > 0 ? ORANGE : C.text}}>freight-claim-review</span>
				</div>
			</Box>
			<Box rect={ROW_TASK} color={GREEN} opacity={fadeIn(3.3)}>
				<div style={{fontSize: 34}}>
					<span style={{color: GREEN, fontWeight: 600}}>You: </span>
					Review this freight claim.
				</div>
			</Box>
			<Box rect={ROW_SKILL} color={ORANGE} opacity={loaded} fill={0.1}>
				<div style={{fontFamily: monoFamily, fontSize: 28, fontWeight: 700, color: ORANGE}}>
					freight-claim-review · full steps
				</div>
				{SKILL_STEPS.map((step, i) => (
					<div key={step} style={{fontSize: 28, display: 'flex', gap: 12}}>
						<span style={{width: 30, color: stepDone(i) > 0 ? GREEN : C.muted}}>
							{stepDone(i) > 0 ? '✓' : `${i + 1}`}
						</span>
						<span style={{opacity: 1 - 0.4 * stepDone(i)}}>{step}</span>
					</div>
				))}
			</Box>

			{/* Beat 4: the skill in flight. */}
			<div
				style={{
					...at(ghost),
					border: `4px solid ${ORANGE}`,
					backgroundColor: alpha(ORANGE, 0.25),
					borderRadius: 18,
					boxShadow: `0 0 40px ${alpha(ORANGE, 0.8)}`,
					opacity: fly > 0 && fly < 1 ? 1 : 0,
				}}
			/>

			{/* Beat 5: the outputs. */}
			{OUTPUTS.map((name, i) => (
				<Box
					key={name}
					rect={OUTPUT(i)}
					color={C.blue}
					opacity={fadeIn(13.6 + i * 0.4)}
					fill={0.15}
				>
					<div style={{fontFamily: monoFamily, fontSize: 30, textAlign: 'center'}}>{name}</div>
				</Box>
			))}

			{CAPTIONS.map((text, i) => (
				<Caption key={text} from={t(BEATS[i])} to={t(BEATS[i + 1]) + (i === 4 ? 12 : 0)}>
					{text}
				</Caption>
			))}
		</SceneFrame>
	);
};
