import type React from 'react';
import {AbsoluteFill, Easing, interpolate, interpolateColors, random, useCurrentFrame, useVideoConfig} from 'remotion';
import {alpha, clamp, ease, fontFamily, monoFamily} from '../theme';
import {pulseAt, T} from './timing';

export const BLACK = '#05060b';
export const RED = '#ff2a3d';
const CENTER = {x: 960, y: 600};
const R = 160;
const START_D = 300;
const END_D = 105;

export const INGREDIENTS = [
	{label: ['Private', 'data'], example: 'claim files, SSNs, bank details', color: '#5aa9c8', angle: -90},
	{label: ['Untrusted', 'content'], example: 'an emailed PDF, a web page', color: '#d9774e', angle: 150},
	{label: ['A way', 'out'], example: 'email, web requests, uploads', color: '#9a7fd1', angle: 30},
];

const RECORDS = [
	'SSN ***-**-4471',
	'Loan $2,400,000',
	'Bond #4471-SR',
	'Acct 0098-5512',
	'DOB 03/14/1971',
	'Claim C-20931',
	'Tax ID 84-•••2210',
	'Payroll_Q3.xlsx',
	'Indemnity agmt.pdf',
	'Routing 0210-0002',
];

// The first 18 records burst in every direction. The rest stream out to the right.
const PARTICLES = Array.from({length: 70}, (_, i) => {
	const burst = i < 18;
	return {
		start: burst ? T.impact + random(`s${i}`) * 0.15 : T.impact + 0.4 + (i - 18) * 0.085,
		angle: burst ? random(`a${i}`) * Math.PI * 2 : (random(`a${i}`) - 0.5) * 0.7,
		speed: (burst ? 700 : 500) + random(`v${i}`) * (burst ? 700 : 500),
		text: RECORDS[i % RECORDS.length],
	};
});

const Caption: React.FC<{
	readonly s: number;
	readonly from: number;
	readonly to: number;
	readonly children: React.ReactNode;
}> = ({s, from, to, children}) => {
	const opacity = interpolate(s, [from, from + 0.6, to - 0.4, to], [0, 1, 1, 0], clamp);
	if (opacity === 0) {
		return null;
	}
	return (
		<div
			style={{
				position: 'absolute',
				top: 50,
				left: 160,
				right: 160,
				textAlign: 'center',
				fontSize: 50,
				fontWeight: 600,
				color: '#d8dbe8',
				opacity,
				textShadow: `0 0 30px ${alpha(RED, 0.4)}`,
			}}
		>
			{children}
		</div>
	);
};

export const ConvergeScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	// Absolute seconds, to line up with the soundtrack.
	const s = T.converge + frame / fps;
	const pull = interpolate(s, [T.pullStart, T.pullEnd], [0, 1], {...clamp, easing: Easing.in(Easing.quad)});
	const pulse = pulseAt(s);
	const hit = s >= T.impact;
	const dt = s - T.impact;
	const decay = hit ? Math.exp(-dt * 3) : 0;
	const breath = s >= T.pullEnd && !hit;

	const shakeAmp = hit ? 40 * decay + 3 : pull * pull * 6 + pulse * pull * 8;
	const shakeX = (random(`x${frame}`) - 0.5) * 2 * shakeAmp;
	const shakeY = (random(`y${frame}`) - 0.5) * 2 * shakeAmp;
	const spike = hit && dt > 0.8 && random(`g${Math.floor(s * 10)}`) > 0.85 ? 8 : 0;
	const split = 14 * decay + spike;
	const flicker = hit ? 0.75 + 0.25 * random(`f${frame}`) : 1;
	const redGlow = breath ? 0 : hit ? (0.3 + 0.5 * decay) * flicker : pull * 0.35 * (0.6 + 0.4 * pulse);
	const coreIn = interpolate(s, [8.6, 9.4], [0, 1], clamp);

	return (
		<AbsoluteFill style={{backgroundColor: BLACK, fontFamily, color: '#eef1fb', overflow: 'hidden'}}>
			<AbsoluteFill
				style={{
					background: `radial-gradient(circle at ${CENTER.x}px ${CENTER.y}px, ${alpha(RED, redGlow)} 0%, transparent 55%)`,
				}}
			/>
			<AbsoluteFill
				style={{
					translate: `${shakeX}px ${shakeY}px`,
					filter: split > 0 ? `drop-shadow(${split}px 0 0 ${alpha(RED, 0.8)}) drop-shadow(${-split}px 0 0 #00e5ffaa)` : undefined,
				}}
			>
				{INGREDIENTS.map((ing, i) => {
					const rad = (ing.angle * Math.PI) / 180;
					const appear = interpolate(s, [T.appear[i], T.appear[i] + 0.9], [0, 1], {...clamp, easing: ease});
					const d = interpolate(pull, [0, 1], [START_D, END_D]) + (hit ? 30 * (1 - decay) : 0);
					const cx = CENTER.x + Math.cos(rad) * d;
					const cy = CENTER.y + Math.sin(rad) * d;
					const color = interpolateColors(hit ? Math.min(1, dt * 8) : 0, [0, 1], [ing.color, RED]);
					// Labels slide into each circle's outer lobe as the circles overlap.
					const k = interpolate(pull, [0, 1], [0, 0.62 * R]);
					const ripple = s - T.appear[i];
					return (
						<div key={ing.example}>
							{ripple > 0 && ripple < 1.4 ? (
								<div
									style={{
										position: 'absolute',
										left: cx - R - ripple * 160,
										top: cy - R - ripple * 160,
										width: 2 * (R + ripple * 160),
										height: 2 * (R + ripple * 160),
										borderRadius: '50%',
										border: `3px solid ${alpha(ing.color, 0.5 * (1 - ripple / 1.4))}`,
									}}
								/>
							) : null}
							<div
								style={{
									position: 'absolute',
									left: cx - R,
									top: cy - R,
									width: 2 * R,
									height: 2 * R,
									boxSizing: 'border-box',
									borderRadius: '50%',
									border: `4px solid ${color}`,
									backgroundColor: alpha(color, hit ? 0.2 : 0.14),
									mixBlendMode: 'screen',
									opacity: appear * flicker * (breath ? 0.6 : 1),
									scale: interpolate(appear, [0, 1], [1.15, 1]),
									filter: `blur(${(1 - appear) * 14}px)`,
									boxShadow: `0 0 ${30 + 40 * pulse * pull}px ${alpha(color, 0.35)}`,
								}}
							/>
							<div
								style={{
									position: 'absolute',
									left: cx + Math.cos(rad) * k - 150,
									top: cy + Math.sin(rad) * k - 90,
									width: 300,
									height: 180,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									textAlign: 'center',
									opacity: appear * (hit ? 0.55 * flicker : 1),
									scale: interpolate(pull, [0, 1], [1, 0.72]),
								}}
							>
								<div style={{fontSize: 42, fontWeight: 800, lineHeight: 1.05}}>
									{ing.label[0]}
									<br />
									{ing.label[1]}
								</div>
								<div
									style={{
										marginTop: 10,
										fontSize: 26,
										color: '#9aa3c4',
										maxWidth: 250,
										opacity: interpolate(pull, [0, 0.4], [1, 0], clamp),
									}}
								>
									{ing.example}
								</div>
							</div>
						</div>
					);
				})}
				<div
					style={{
						position: 'absolute',
						left: CENTER.x - 70,
						top: CENTER.y - 70,
						width: 140,
						height: 140,
						borderRadius: '50%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 28,
						fontWeight: 800,
						whiteSpace: 'nowrap',
						color: hit ? RED : '#eef1fb',
						backgroundColor: hit ? alpha(RED, 0.35) : '#0d1020',
						border: `3px solid ${hit ? RED : alpha('#eef1fb', 0.5)}`,
						opacity: coreIn * (breath ? 0.25 : 1),
						scale: hit ? 1 + 0.5 * decay : 1 + 0.12 * pulse * pull,
						boxShadow: `0 0 ${hit ? 120 * flicker : 50 * pulse * pull}px ${RED}`,
					}}
				>
					AI agent
				</div>
				{PARTICLES.map((p, i) => {
					const t = s - p.start;
					if (t < 0 || t > 3) {
						return null;
					}
					const dist = 80 + p.speed * t + 300 * t * t;
					return (
						<div
							key={i}
							style={{
								position: 'absolute',
								left: CENTER.x + Math.cos(p.angle) * dist,
								top: CENTER.y + Math.sin(p.angle) * dist,
								translate: '-50% -50%',
								fontFamily: monoFamily,
								fontSize: 28,
								fontWeight: 700,
								whiteSpace: 'nowrap',
								color: i % 3 === 0 ? '#ffffff' : RED,
								opacity: interpolate(t, [0, 0.1, 1.6, 2.4], [0, 1, 0.9, 0], clamp),
								textShadow: `0 0 12px ${RED}`,
							}}
						>
							{p.text}
						</div>
					);
				})}
			</AbsoluteFill>
			{[0, 0.12].map((delay) => {
				const t = s - T.impact - delay;
				if (t < 0 || t > 1.2) {
					return null;
				}
				const radius = interpolate(t, [0, 1.2], [60, 1500], {...clamp, easing: ease});
				return (
					<div
						key={delay}
						style={{
							position: 'absolute',
							left: CENTER.x - radius,
							top: CENTER.y - radius,
							width: 2 * radius,
							height: 2 * radius,
							borderRadius: '50%',
							border: `${interpolate(t, [0, 1.2], [14, 2])}px solid ${delay === 0 ? '#ffffff' : RED}`,
							opacity: interpolate(t, [0, 1.2], [1, 0], clamp),
						}}
					/>
				);
			})}
			<AbsoluteFill
				style={{
					opacity: hit ? 0.35 * flicker : 0,
					background: `linear-gradient(to left, ${alpha(RED, 0.5)}, transparent 18%)`,
				}}
			/>
			<AbsoluteFill
				style={{
					opacity: hit ? 0.18 : 0,
					background: 'repeating-linear-gradient(to bottom, #000000 0px, #000000 2px, transparent 2px, transparent 5px)',
				}}
			/>
			<AbsoluteFill style={{background: `radial-gradient(circle at 50% 55%, transparent 45%, ${BLACK} 100%)`}} />
			{hit ? (
				<div
					style={{
						position: 'absolute',
						right: 90,
						bottom: 70,
						textAlign: 'right',
						fontFamily: monoFamily,
						color: RED,
						opacity: interpolate(s, [T.impact + 0.3, T.impact + 0.6], [0, 1], clamp) * flicker,
					}}
				>
					<div style={{fontSize: 26, letterSpacing: 4}}>RECORDS SENT</div>
					<div style={{fontSize: 60, fontWeight: 700, fontVariantNumeric: 'tabular-nums'}}>
						{Math.floor(
							interpolate(s, [T.impact + 0.3, T.fadeOut - 0.5], [0, 18402], {...clamp, easing: Easing.in(Easing.quad)}),
						).toLocaleString('en-US')}
					</div>
				</div>
			) : null}
			<Caption s={s} from={3.4} to={8.8}>
				Each one is useful on its own.
			</Caption>
			<Caption s={s} from={9} to={15.2}>
				Give one agent all three…
			</Caption>
			<Caption s={s} from={16.6} to={20.9}>
				…and one hidden line in a document sends your data out.
			</Caption>
			<AbsoluteFill
				style={{
					backgroundColor: '#ffffff',
					opacity: interpolate(s, [T.impact, T.impact + 0.05, T.impact + 0.25], [0, 1, 0], clamp),
				}}
			/>
			<AbsoluteFill
				style={{
					backgroundColor: RED,
					opacity: interpolate(s, [T.impact + 0.05, T.impact + 0.2, T.impact + 0.9], [0, 0.55, 0], clamp),
				}}
			/>
			<AbsoluteFill
				style={{backgroundColor: BLACK, opacity: interpolate(s, [T.fadeOut, T.closing], [0, 1], clamp)}}
			/>
		</AbsoluteFill>
	);
};
