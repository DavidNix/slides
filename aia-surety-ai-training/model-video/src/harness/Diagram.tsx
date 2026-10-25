import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, alpha, clamp, ease, monoFamily} from '../theme';
import {ALL_LEGS, BEATS, BEAT_STARTS, type NodeId} from './beats';

type NodeBox = {
	readonly x: number;
	readonly y: number;
	readonly w: number;
	readonly h: number;
	readonly title: string;
	readonly lines: readonly string[];
	readonly mono?: boolean;
	readonly color: string;
};

export const NODE_COLORS: Record<NodeId, string> = {
	you: '#06d6a0',
	harness: C.accent,
	model: '#b388ff',
	tools: C.blue,
};

export const NODE_NAMES: Record<NodeId, string> = {
	you: 'You',
	harness: 'Harness',
	model: 'AI model',
	tools: 'Tools',
};

const NODES: Record<NodeId, NodeBox> = {
	you: {x: 960, y: 112, w: 240, h: 84, title: 'You', lines: [], color: NODE_COLORS.you},
	harness: {
		x: 960,
		y: 330,
		w: 400,
		h: 180,
		title: 'Harness',
		lines: ['ordinary software', 'that coordinates'],
		color: NODE_COLORS.harness,
	},
	model: {
		x: 330,
		y: 330,
		w: 340,
		h: 180,
		title: 'AI model',
		lines: ['at the provider,', 'proposes next step'],
		color: NODE_COLORS.model,
	},
	tools: {
		x: 1590,
		y: 330,
		w: 340,
		h: 180,
		title: 'Tools',
		lines: ['get_submission', 'get_checklist'],
		mono: true,
		color: NODE_COLORS.tools,
	},
};

// Seconds at which each node fades in.
const NODE_IN: Record<NodeId, number> = {
	model: 0.2,
	harness: 0.5,
	tools: 0.8,
	you: BEAT_STARTS[1],
};

const anchors = (a: NodeId, b: NodeId) => {
	const na = NODES[a];
	const nb = NODES[b];
	if (na.y === nb.y) {
		const dir = Math.sign(nb.x - na.x);
		return {x1: na.x + (dir * na.w) / 2, y1: na.y, x2: nb.x - (dir * nb.w) / 2, y2: nb.y};
	}
	const dir = Math.sign(nb.y - na.y);
	return {x1: na.x, y1: na.y + (dir * na.h) / 2, x2: nb.x, y2: nb.y - (dir * nb.h) / 2};
};

const LINKS: readonly {a: NodeId; b: NodeId; label?: string}[] = [
	{a: 'you', b: 'harness'},
	{a: 'model', b: 'harness', label: 'API · JSON'},
	{a: 'harness', b: 'tools', label: 'MCP · JSON-RPC'},
];

const STOP_BEAT = BEATS.findIndex((b) => b.id === 'stop');
const ASK_BEAT = BEATS.findIndex((b) => b.id === 'ask');
export const LOOP_STOPS_AT = BEAT_STARTS[STOP_BEAT] + 4.5;

export const Diagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;

	const beatIndex = BEAT_STARTS.filter((start) => t >= start).length - 1;
	const arrived = ALL_LEGS.filter((leg) => leg.start + leg.dur <= t);
	const glowing: NodeId | null =
		BEATS[beatIndex].focus ?? (arrived.length ? arrived[arrived.length - 1].to : null);
	const moving = ALL_LEGS.filter((leg) => t >= leg.start && t < leg.start + leg.dur);
	const turn = ALL_LEGS.filter((leg) => leg.to === 'model' && leg.start <= t).length;
	const loopShown = t >= BEAT_STARTS[ASK_BEAT];
	const stopped = t >= LOOP_STOPS_AT;

	const nodeIn = (id: NodeId) =>
		interpolate(t, [NODE_IN[id], NODE_IN[id] + 0.5], [0, 1], {...clamp, easing: ease});

	return (
		<>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{LINKS.map(({a, b, label}) => {
					const p = anchors(a, b);
					const shown = Math.min(nodeIn(a), nodeIn(b));
					return (
						<g key={`${a}-${b}`} opacity={shown}>
							<line {...p} stroke={C.line} strokeWidth={6} strokeLinecap="round" />
							{label ? (
								<text
									x={(p.x1 + p.x2) / 2}
									y={p.y1 - 22}
									textAnchor="middle"
									fill={C.muted}
									fontSize={24}
									fontWeight={600}
								>
									{label}
								</text>
							) : null}
						</g>
					);
				})}
				{moving.map((leg) => {
					const p = anchors(leg.from, leg.to);
					const k = interpolate(t, [leg.start, leg.start + leg.dur], [0, 1], {
						...clamp,
						easing: ease,
					});
					const color = NODE_COLORS[leg.from];
					return (
						<g key={`${leg.from}-${leg.to}-${leg.start}`}>
							<line
								x1={p.x1}
								y1={p.y1}
								x2={p.x1 + (p.x2 - p.x1) * k}
								y2={p.y1 + (p.y2 - p.y1) * k}
								stroke={color}
								strokeWidth={6}
								strokeLinecap="round"
							/>
							<circle
								cx={p.x1 + (p.x2 - p.x1) * k}
								cy={p.y1 + (p.y2 - p.y1) * k}
								r={18}
								fill={color}
								style={{filter: `drop-shadow(0 0 14px ${color})`}}
							/>
						</g>
					);
				})}
			</svg>
			{(Object.keys(NODES) as NodeId[]).map((id) => {
				const n = NODES[id];
				const lit = glowing === id;
				return (
					<div
						key={id}
						style={{
							position: 'absolute',
							left: n.x - n.w / 2,
							top: n.y - n.h / 2,
							width: n.w,
							height: n.h,
							boxSizing: 'border-box',
							borderRadius: 26,
							border: `4px solid ${lit ? n.color : alpha(n.color, 0.45)}`,
							backgroundColor: lit ? alpha(n.color, 0.18) : C.panel,
							boxShadow: lit ? `0 0 50px ${alpha(n.color, 0.55)}` : undefined,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 6,
							opacity: nodeIn(id),
							scale: interpolate(nodeIn(id), [0, 1], [0.9, 1]),
						}}
					>
						<div style={{fontSize: 44, fontWeight: 800, color: n.color}}>{n.title}</div>
						{n.lines.map((line) => (
							<div
								key={line}
								style={{
									fontSize: n.mono ? 26 : 28,
									fontFamily: n.mono ? monoFamily : undefined,
									color: C.muted,
									lineHeight: 1.15,
								}}
							>
								{line}
							</div>
						))}
					</div>
				);
			})}
			{turn > 0 ? (
				<div
					style={{
						position: 'absolute',
						left: 100,
						top: 80,
						padding: '12px 26px',
						borderRadius: 40,
						border: `3px solid ${NODE_COLORS.model}`,
						color: NODE_COLORS.model,
						fontSize: 36,
						fontWeight: 800,
					}}
				>
					Model turn {turn}
				</div>
			) : null}
			{loopShown ? (
				<div
					style={{
						position: 'absolute',
						right: 100,
						top: 80,
						padding: '12px 26px',
						borderRadius: 40,
						border: `3px solid ${stopped ? '#ff6b6b' : '#06d6a0'}`,
						backgroundColor: alpha(stopped ? '#ff6b6b' : '#06d6a0', 0.14),
						color: stopped ? '#ff6b6b' : '#06d6a0',
						fontSize: 36,
						fontWeight: 800,
					}}
				>
					{stopped ? '■ Loop stopped' : '● Loop running'}
				</div>
			) : null}
		</>
	);
};
