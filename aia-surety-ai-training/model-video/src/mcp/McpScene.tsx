import type React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, SceneFrame} from '../components';
import {C, alpha, clamp, ease, monoFamily} from '../theme';

const GREEN = '#06d6a0';
const ORANGE = '#ff8a5b';
const PURPLE = '#b388ff';

// Seconds at which each beat starts, plus the scene end.
const BEATS = [0, 3.5, 7.5, 9.5, 16.2, 19] as const;
export const MCP_SCENE_SECONDS = BEATS[5];

const STEPS = [
	'1 · One standard plug',
	'2 · What can you do?',
	'3 · The task',
	'4 · Call and result',
	'5 · The work is done',
];

const CAPTIONS: readonly {text: string; from: number; to: number}[] = [
	{text: 'MCP is one standard way for an agent to plug into systems.', from: 0, to: 3.5},
	{text: 'The agent asks each server which tools it offers.', from: 3.5, to: 7.5},
	{text: 'You give the agent a task in plain words.', from: 7.5, to: 9.5},
	{text: 'The agent picks a tool, calls it, and reads the result.', from: 9.5, to: 12.8},
	{text: 'Each result shapes the next call.', from: 12.8, to: 16.2},
	{text: 'You review the draft before anything goes out.', from: 16.2, to: 19.4},
];

const SERVERS = [
	{name: 'Outlook', color: C.blue, tools: ['search_mail', 'create_draft']},
	{name: 'Carrier tracking', color: ORANGE, tools: ['track_shipment']},
	{name: 'Shared drive', color: PURPLE, tools: ['read_file']},
];

// One request out to a server and one response back, visible until `until`.
type Exchange = {
	readonly server: number;
	readonly at: number;
	readonly until: number;
	readonly request: string;
	readonly response: string;
};

const DISCOVERY: readonly Exchange[] = SERVERS.map((s, i) => ({
	server: i,
	at: 3.8 + i * 0.3,
	until: 7.3,
	request: 'tools/list',
	response: s.tools.join(', '),
}));

const CALLS: readonly Exchange[] = [
	{
		server: 1,
		at: 9.7,
		until: 11.9,
		request: 'track_shipment("PRO 88213")',
		response: 'Delivered Oct 14, signed J. Ortiz',
	},
	{
		server: 0,
		at: 11.9,
		until: 14.1,
		request: 'search_mail("claim 4471")',
		response: 'Receiver: crate arrived damaged',
	},
	{
		server: 0,
		at: 14.1,
		until: 16.4,
		request: 'create_draft(to: "carrier")',
		response: 'Draft saved. Not sent.',
	},
];

// A request takes this long to reach the server, and the response as long to return.
const TRAVEL = 0.6;
const RESPONSE_AT = 0.8;

type Rect = {readonly x: number; readonly y: number; readonly w: number; readonly h: number};

// Layout, in composition pixels.
const AGENT: Rect = {x: 100, y: 290, w: 440, h: 560};
const SERVER = (i: number): Rect => ({x: 1360, y: 300 + i * 180, w: 460, h: 140});
const cableY = (i: number) => SERVER(i).y + SERVER(i).h / 2;
const CABLE_FROM = AGENT.x + AGENT.w;
const CABLE_TO = SERVER(0).x;
const PLUG_X = CABLE_TO - 110;
const CHIP_X = (CABLE_FROM + PLUG_X) / 2;

const at = (r: Rect): React.CSSProperties => ({
	position: 'absolute',
	left: r.x,
	top: r.y,
	width: r.w,
	height: r.h,
	boxSizing: 'border-box',
});

const Chip: React.FC<{
	readonly y: number;
	readonly color: string;
	readonly opacity: number;
	readonly children: React.ReactNode;
}> = ({y, color, opacity, children}) => (
	<div
		style={{
			position: 'absolute',
			left: CHIP_X,
			top: y,
			translate: '-50% 0px',
			fontFamily: monoFamily,
			fontSize: 28,
			whiteSpace: 'nowrap',
			color,
			backgroundColor: C.bg,
			border: `3px solid ${color}`,
			borderRadius: 10,
			padding: '4px 14px',
			opacity,
		}}
	>
		{children}
	</div>
);

export const McpScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = (s: number) => s * fps;
	// 0 to 1 over a short fade that starts at `s` seconds.
	const fadeIn = (s: number, len = 12) => interpolate(frame, [t(s), t(s) + len], [0, 1], clamp);
	// Visible from `from` to `to` seconds, with short fades at each end.
	const window = (from: number, to: number) =>
		interpolate(frame, [t(from), t(from) + 8, t(to) - 8, t(to)], [0, 1, 1, 0], clamp);
	const travel = (from: number) =>
		interpolate(frame, [t(from), t(from + TRAVEL)], [0, 1], {...clamp, easing: ease});

	const next = STEPS.findIndex((_, i) => frame < t(BEATS[i + 1]));
	const beat = next === -1 ? STEPS.length - 1 : next;

	const exchanges = [...DISCOVERY, ...CALLS];
	const active = (i: number) =>
		Math.max(0, ...exchanges.filter((e) => e.server === i).map((e) => window(e.at, e.until)));
	// Tools appear in the agent's list once discovery returns them.
	const tools = SERVERS.flatMap((s, i) =>
		s.tools.map((name) => ({name, color: s.color, at: DISCOVERY[i].at + RESPONSE_AT + TRAVEL})),
	);
	const toolInUse = (name: string) =>
		Math.max(0, ...CALLS.filter((c) => c.request.startsWith(name)).map((c) => window(c.at, c.until)));

	return (
		<SceneFrame>
			{/* Header: a fixed title and a step label that changes per beat. */}
			<div style={{position: 'absolute', top: 80, left: 0, right: 0, textAlign: 'center'}}>
				<div style={{fontSize: 72, fontWeight: 800, opacity: fadeIn(0, 15)}}>
					How an agent connects with MCP
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

			{/* Cables, one per server, each with the same MCP plug. */}
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{SERVERS.map((s, i) => {
					const draw = interpolate(frame, [t(0.6 + i * 0.25), t(1.4 + i * 0.25)], [0, 1], {
						...clamp,
						easing: ease,
					});
					return (
						<line
							key={s.name}
							x1={CABLE_FROM}
							y1={cableY(i)}
							x2={CABLE_FROM + (CABLE_TO - CABLE_FROM) * draw}
							y2={cableY(i)}
							stroke={active(i) > 0 ? s.color : C.gray}
							strokeWidth={5}
							opacity={draw > 0 ? 1 : 0}
						/>
					);
				})}
			</svg>
			{SERVERS.map((s, i) => (
				<div
					key={s.name}
					style={{
						position: 'absolute',
						left: PLUG_X,
						top: cableY(i),
						translate: '-50% -50%',
						fontSize: 28,
						fontWeight: 800,
						letterSpacing: 2,
						color: C.bg,
						backgroundColor: C.accent,
						borderRadius: 12,
						padding: '6px 16px',
						opacity: fadeIn(1.4 + i * 0.25),
						scale: interpolate(frame, [t(1.4 + i * 0.25), t(1.4 + i * 0.25) + 12], [0.6, 1], {
							...clamp,
							easing: ease,
						}),
					}}
				>
					MCP
				</div>
			))}

			{/* MCP servers. */}
			{SERVERS.map((s, i) => (
				<div
					key={s.name}
					style={{
						...at(SERVER(i)),
						border: `4px solid ${s.color}`,
						backgroundColor: alpha(s.color, 0.12),
						borderRadius: 18,
						padding: '14px 26px',
						opacity: fadeIn(0.3 + i * 0.2),
						boxShadow: `0 0 ${50 * active(i)}px ${alpha(s.color, 0.7 * active(i))}`,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<div style={{fontSize: 44, fontWeight: 800}}>{s.name}</div>
					<div style={{fontSize: 30, color: C.muted}}>MCP server</div>
				</div>
			))}

			{/* The agent. */}
			<div
				style={{
					...at(AGENT),
					border: `4px solid ${C.accent}`,
					backgroundColor: C.panel,
					borderRadius: 24,
					padding: '20px 28px',
					opacity: fadeIn(0.1),
					display: 'flex',
					flexDirection: 'column',
					gap: 14,
				}}
			>
				<div style={{fontSize: 48, fontWeight: 800}}>Agent</div>
				<div
					style={{
						border: `3px solid ${GREEN}`,
						backgroundColor: alpha(GREEN, 0.12),
						borderRadius: 14,
						padding: '10px 16px',
						fontSize: 30,
						lineHeight: 1.25,
						opacity: fadeIn(7.7),
					}}
				>
					<span style={{color: GREEN, fontWeight: 600}}>You: </span>
					Check the delivery dispute on claim 4471.
				</div>
				<div style={{fontSize: 30, color: C.muted, opacity: fadeIn(3.8)}}>Tools it can use</div>
				{tools.map((tool) => (
					<div
						key={tool.name}
						style={{
							fontFamily: monoFamily,
							fontSize: 30,
							color: tool.color,
							opacity: fadeIn(tool.at),
							translate: `${(1 - fadeIn(tool.at)) * -16}px 0px`,
							textShadow: `0 0 ${18 * toolInUse(tool.name)}px ${tool.color}`,
							fontWeight: toolInUse(tool.name) > 0.5 ? 700 : 400,
						}}
					>
						{toolInUse(tool.name) > 0.5 ? '▸ ' : '  '}
						{tool.name}
					</div>
				))}
			</div>

			{/* The finished work, between the agent and the idle cables. */}
			<div
				style={{
					position: 'absolute',
					left: CABLE_FROM + 50,
					width: PLUG_X - CABLE_FROM - 130,
					top: cableY(1),
					translate: `0px ${-50 + (1 - fadeIn(16.4)) * 10}%`,
					boxSizing: 'border-box',
					border: `4px solid ${C.accent}`,
					backgroundColor: '#2a2616',
					borderRadius: 18,
					padding: '18px 24px',
					fontSize: 34,
					lineHeight: 1.3,
					opacity: fadeIn(16.4),
				}}
			>
				<div style={{fontSize: 30, fontWeight: 600, color: C.accent, marginBottom: 6}}>
					Agent&apos;s answer
				</div>
				Delivered and signed Oct 14. Receiver reports damage. Follow-up draft is in Outlook.
			</div>

			{/* Requests above each cable, responses below. */}
			{exchanges.map((e) => {
				const y = cableY(e.server);
				const color = SERVERS[e.server].color;
				const out = travel(e.at);
				const back = travel(e.at + RESPONSE_AT);
				const vis = window(e.at, e.until);
				return (
					<div key={`${e.at}-${e.request}`}>
						<Chip y={y - 58} color={C.text} opacity={vis}>
							{e.request}
						</Chip>
						<Chip y={y + 16} color={color} opacity={vis * fadeIn(e.at + RESPONSE_AT + TRAVEL)}>
							{e.response}
						</Chip>
						{[
							{p: out, from: CABLE_FROM, to: CABLE_TO, c: C.text},
							{p: back, from: CABLE_TO, to: CABLE_FROM, c: color},
						].map(({p, from, to, c}) => (
							<div
								key={from}
								style={{
									position: 'absolute',
									left: interpolate(p, [0, 1], [from, to]),
									top: y,
									width: 22,
									height: 22,
									translate: '-50% -50%',
									borderRadius: 11,
									backgroundColor: c,
									boxShadow: `0 0 20px ${c}`,
									opacity: p > 0 && p < 1 ? 1 : 0,
								}}
							/>
						))}
					</div>
				);
			})}

			{CAPTIONS.map((c) => (
				<Caption key={c.text} from={t(c.from)} to={t(c.to)}>
					{c.text}
				</Caption>
			))}
		</SceneFrame>
	);
};
