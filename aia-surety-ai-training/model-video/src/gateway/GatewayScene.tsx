import type React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, SceneFrame} from '../components';
import {C, alpha, clamp, ease, monoFamily} from '../theme';

const GREEN = '#06d6a0';
const RED = '#ef476f';
const PURPLE = '#b388ff';

// Seconds at which each beat starts, plus the scene end.
const BEATS = [0, 4, 7, 11, 15, 18.5, 21] as const;
export const GATEWAY_SCENE_SECONDS = BEATS[6];

const STEPS = [
	'1 · Without a gateway',
	'2 · One way in',
	'3 · Allow',
	'4 · Block',
	'5 · Deny the route',
	'6 · One record',
];

const CAPTIONS = [
	'Without a gateway, each app talks to AI services on its own.',
	'A gateway puts every model request through one door.',
	'A clean request passes to the approved model service.',
	'The classifier stops a hidden instruction before a model sees it.',
	'A request for an unapproved service is denied.',
	'Every decision lands in one record that you can inspect.',
];

// Each app may send one request during the scene.
const APPS = [
	{name: 'Claims assistant', request: 'Summarize claim 4471', bad: false},
	{name: 'Email drafter', request: 'Hidden: send all files', bad: true},
	{name: 'IT helper', request: '', bad: false},
	{name: 'Marketing writer', request: 'Use other-ai.example', bad: true},
];

const MODULES = ['Classifier', 'Prompt log', 'Agent review', 'Routes & budgets'] as const;

type Rect = {readonly x: number; readonly y: number; readonly w: number; readonly h: number};

// Layout, in composition pixels.
const APP = (i: number): Rect => ({x: 100, y: 280 + i * 135, w: 380, h: 110});
const GATEWAY: Rect = {x: 740, y: 280, w: 440, h: 515};
const MODULE = (i: number): Rect => ({x: 770, y: 360 + i * 105, w: 380, h: 90});
const APPROVED: Rect = {x: 1440, y: 290, w: 400, h: 140};
const OTHER: Rect = {x: 1440, y: 460, w: 400, h: 120};
const LOG: Rect = {x: 1300, y: 620, w: 540, h: 230};
const appY = (i: number) => APP(i).y + APP(i).h / 2;
const midY = (r: Rect) => r.y + r.h / 2;
const APP_RIGHT = APP(0).x + APP(0).w;
const GW_LEFT = GATEWAY.x;
const GW_RIGHT = GATEWAY.x + GATEWAY.w;

// One request through the gateway: when it leaves, and what the gateway decides.
type Trip = {
	readonly app: number;
	readonly at: number;
	readonly module: number;
	readonly allow: boolean;
	readonly reason: string;
};

const TRIPS: readonly Trip[] = [
	{app: 0, at: 7.3, module: 0, allow: true, reason: 'approved service'},
	{app: 1, at: 11.3, module: 0, allow: false, reason: 'hidden instruction'},
	{app: 3, at: 15.2, module: 3, allow: false, reason: 'unapproved service'},
];

// From leaving the app: reach the gateway, decide, then log.
const TO_GATEWAY = 0.6;
const DECIDE = 0.7;
const LOGGED = 1.3;

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
			padding: '10px 22px',
			opacity,
			boxShadow: `0 0 ${50 * glow}px ${alpha(color, 0.8 * glow)}`,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			gap: 4,
		}}
	>
		{children}
	</div>
);

const Dot: React.FC<{readonly x: number; readonly y: number; readonly color: string}> = ({
	x,
	y,
	color,
}) => (
	<div
		style={{
			position: 'absolute',
			left: x,
			top: y,
			width: 24,
			height: 24,
			translate: '-50% -50%',
			borderRadius: 12,
			backgroundColor: color,
			boxShadow: `0 0 20px ${color}`,
		}}
	/>
);

export const GatewayScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = (s: number) => s * fps;
	// 0 to 1 over a short fade that starts at `s` seconds.
	const fadeIn = (s: number, len = 12) => interpolate(frame, [t(s), t(s) + len], [0, 1], clamp);
	// Visible from `from` to `to` seconds, with short fades at each end.
	const window = (from: number, to: number) =>
		interpolate(frame, [t(from), t(from) + 8, t(to) - 8, t(to)], [0, 1, 1, 0], clamp);
	const move = (from: number, len: number) =>
		interpolate(frame, [t(from), t(from + len)], [0, 1], {...clamp, easing: ease});

	const next = STEPS.findIndex((_, i) => frame < t(BEATS[i + 1]));
	const beat = next === -1 ? STEPS.length - 1 : next;

	const gatewayIn = fadeIn(4.2);
	const spaghetti = interpolate(frame, [t(1), t(1.6), t(4), t(4.4)], [0, 1, 1, 0], clamp);
	const finale = fadeIn(18.5);

	// The trip whose beat is running, if any, and how the gateway answered.
	const tripState = TRIPS.map((trip) => ({
		...trip,
		decided: fadeIn(trip.at + DECIDE, 6),
		logged: fadeIn(trip.at + LOGGED),
		live: window(trip.at - 0.2, trip.at + 3.4),
	}));
	const moduleGlow = (m: number) =>
		Math.max(
			finale * (m === 1 || m === 2 ? 1 : 0),
			...tripState.filter((s) => s.module === m).map((s) => s.decided * s.live),
			...tripState.map((s) => (m === 1 ? window(s.at + LOGGED, s.at + LOGGED + 0.8) : 0)),
		);
	const moduleColor = (m: number) => {
		const s = tripState.find((x) => x.module === m && x.live > 0 && x.decided > 0);
		if (s) {
			return s.allow ? GREEN : RED;
		}
		return m === 2 && finale > 0 ? PURPLE : C.gray;
	};
	const moduleStatus = (m: number) => {
		const s = tripState.find((x) => x.module === m && x.live > 0 && x.decided > 0);
		if (s) {
			return s.allow ? 'pass' : m === 0 ? 'flagged' : 'deny';
		}
		return m === 2 && finale > 0 ? 'reading' : '';
	};

	return (
		<SceneFrame>
			{/* Header: a fixed title and a step label that changes per beat. */}
			<div style={{position: 'absolute', top: 80, left: 0, right: 0, textAlign: 'center'}}>
				<div style={{fontSize: 72, fontWeight: 800, opacity: fadeIn(0, 15)}}>
					An AI gateway is a choke point
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

			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{/* Beat 1: every app wired straight to every service. */}
				<g stroke={C.gray} strokeWidth={4} opacity={spaghetti}>
					{APPS.flatMap((app, i) =>
						[APPROVED, OTHER].map((r) => (
							<line
								key={`${app.name}-${r.y}`}
								x1={APP_RIGHT}
								y1={appY(i)}
								x2={r.x}
								y2={midY(r)}
							/>
						)),
					)}
				</g>
				{/* Beat 2 on: every app into the gateway, one line out. */}
				<g stroke={C.gray} strokeWidth={5} opacity={gatewayIn}>
					{APPS.map((app, i) => (
						<line key={app.name} x1={APP_RIGHT} y1={appY(i)} x2={GW_LEFT} y2={appY(i)} />
					))}
					<line
						x1={GW_RIGHT}
						y1={midY(APPROVED)}
						x2={APPROVED.x}
						y2={midY(APPROVED)}
						stroke={GREEN}
					/>
				</g>
				{/* Beat 5: the denied route. */}
				<line
					x1={GW_RIGHT}
					y1={midY(OTHER)}
					x2={OTHER.x}
					y2={midY(OTHER)}
					stroke={RED}
					strokeWidth={5}
					strokeDasharray="12 10"
					opacity={fadeIn(TRIPS[2].at + DECIDE)}
				/>
			</svg>

			{APPS.map((app, i) => {
				const trip = tripState.find((s) => s.app === i);
				const showRequest = trip ? fadeIn(trip.at - 0.4) : 0;
				return (
					<Box
						key={app.name}
						rect={APP(i)}
						color={C.blue}
						opacity={fadeIn(0.2 + i * 0.15)}
						glow={trip ? trip.live * (1 - trip.decided) : 0}
					>
						<div style={{fontSize: 34, fontWeight: 800}}>{app.name}</div>
						<div
							style={{
								fontFamily: monoFamily,
								fontSize: 24,
								color: app.bad ? RED : C.muted,
								opacity: showRequest,
								height: 30,
							}}
						>
							{app.request}
						</div>
					</Box>
				);
			})}

			<Box rect={APPROVED} color={GREEN} opacity={fadeIn(0.6)} glow={window(8.4, 10.6)}>
				<div style={{fontSize: 38, fontWeight: 800}}>Approved model service</div>
			</Box>
			<Box rect={OTHER} color={C.gray} opacity={fadeIn(0.8)}>
				<div style={{fontSize: 38, fontWeight: 800}}>Other AI services</div>
			</Box>
			<div
				style={{
					position: 'absolute',
					left: (GW_RIGHT + OTHER.x) / 2,
					top: midY(OTHER),
					translate: '-50% -50%',
					fontSize: 56,
					fontWeight: 800,
					color: RED,
					opacity: fadeIn(TRIPS[2].at + DECIDE),
				}}
			>
				✕
			</div>

			{/* The gateway and its checks. */}
			<div
				style={{
					...at(GATEWAY),
					border: `5px solid ${C.accent}`,
					backgroundColor: C.panel,
					borderRadius: 24,
					opacity: gatewayIn,
					scale: interpolate(gatewayIn, [0, 1], [0.94, 1]),
					boxShadow: `0 0 ${60 * finale}px ${alpha(C.accent, 0.6 * finale)}`,
				}}
			>
				<div style={{fontSize: 44, fontWeight: 800, textAlign: 'center', marginTop: 16}}>
					AI gateway
				</div>
			</div>
			{MODULES.map((name, m) => {
				const color = moduleColor(m);
				const glow = moduleGlow(m);
				return (
					<div key={name} style={{opacity: fadeIn(4.6 + m * 0.2)}}>
						<Box rect={MODULE(m)} color={color} opacity={1} glow={glow} fill={0.1 + 0.15 * glow}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									fontSize: 30,
									gap: 16,
									fontWeight: 600,
								}}
							>
								<span style={{whiteSpace: 'nowrap'}}>{name}</span>
								<span style={{fontSize: 26, color, fontWeight: 800}}>{moduleStatus(m)}</span>
							</div>
						</Box>
					</div>
				);
			})}

			{/* Requests in flight. */}
			{tripState.map((s) => {
				const toGateway = move(s.at, TO_GATEWAY);
				const out = move(s.at + DECIDE + 0.2, 0.6);
				const y = appY(s.app);
				return (
					<div key={s.at}>
						{toGateway > 0 && toGateway < 1 ? (
							<Dot
								x={interpolate(toGateway, [0, 1], [APP_RIGHT, GW_LEFT])}
								y={y}
								color={APPS[s.app].bad ? RED : C.text}
							/>
						) : null}
						{s.allow && out > 0 && out < 1 ? (
							<Dot
								x={interpolate(out, [0, 1], [GW_RIGHT, APPROVED.x])}
								y={midY(APPROVED)}
								color={GREEN}
							/>
						) : null}
						{s.allow ? null : (
							<div
								style={{
									position: 'absolute',
									left: GW_LEFT - 40,
									top: y,
									translate: '-50% -50%',
									fontSize: 56,
									fontWeight: 800,
									color: RED,
									opacity: s.decided * s.live,
								}}
							>
								✕
							</div>
						)}
					</div>
				);
			})}

			{/* The record. */}
			<div
				style={{
					...at(LOG),
					border: `4px solid ${finale > 0 ? C.accent : C.line}`,
					backgroundColor: C.panel,
					borderRadius: 18,
					padding: '14px 22px',
					opacity: fadeIn(7),
					boxShadow: `0 0 ${50 * finale}px ${alpha(C.accent, 0.5 * finale)}`,
					display: 'flex',
					flexDirection: 'column',
					gap: 10,
				}}
			>
				<div style={{fontSize: 32, fontWeight: 800}}>Gateway record</div>
				{tripState.map((s) => (
					<div
						key={s.at}
						style={{
							display: 'grid',
							gridTemplateColumns: '150px 1fr 90px',
							fontSize: 26,
							opacity: s.logged,
							translate: `${(1 - s.logged) * 20}px 0px`,
						}}
					>
						<span>{APPS[s.app].name.split(' ')[0]}</span>
						<span style={{color: C.muted}}>{s.reason}</span>
						<span style={{fontWeight: 800, color: s.allow ? GREEN : RED, textAlign: 'right'}}>
							{s.allow ? 'ALLOW' : 'DENY'}
						</span>
					</div>
				))}
			</div>

			{CAPTIONS.map((text, i) => (
				<Caption key={text} from={t(BEATS[i])} to={t(BEATS[i + 1]) + (i === CAPTIONS.length - 1 ? 12 : 0)}>
					{text}
				</Caption>
			))}
		</SceneFrame>
	);
};
