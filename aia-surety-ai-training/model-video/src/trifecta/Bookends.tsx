import {AbsoluteFill, interpolate, interpolateColors, useCurrentFrame, useVideoConfig} from 'remotion';
import {alpha, clamp, ease, fontFamily} from '../theme';
import {BLACK, INGREDIENTS, RED} from './ConvergeScene';

export const OpeningTitle = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = frame / fps;
	return (
		<AbsoluteFill
			style={{
				backgroundColor: BLACK,
				fontFamily,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 30,
				opacity: interpolate(s, [2.6, 3.3], [1, 0], clamp),
			}}
		>
			<div
				style={{
					fontSize: 120,
					fontWeight: 800,
					color: '#f3e6e8',
					letterSpacing: interpolate(s, [0, 3.3], [0, 10]),
					textShadow: `0 0 60px ${alpha(RED, 0.6)}`,
					opacity: interpolate(s, [0.3, 1.6], [0, 1], clamp),
					filter: `blur(${interpolate(s, [0.3, 1.6], [12, 0], clamp)}px)`,
				}}
			>
				The lethal trifecta
			</div>
			<div style={{fontSize: 50, color: '#9aa3c4', opacity: interpolate(s, [1.2, 2], [0, 1], clamp)}}>
				Three useful abilities. One dangerous combination.
			</div>
		</AbsoluteFill>
	);
};

const CENTER = {x: 960, y: 420};
const D = 150;
const R = 100;

export const ClosingCard = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = frame / fps;
	const fadeIn = interpolate(s, [0, 0.8], [0, 1], clamp);
	// The "A way out" circle is cut away.
	const cut = interpolate(s, [1.4, 2.2], [0, 1], {...clamp, easing: ease});
	return (
		<AbsoluteFill style={{backgroundColor: BLACK, fontFamily, color: '#eef1fb'}}>
			{INGREDIENTS.map((ing, i) => {
				const rad = (ing.angle * Math.PI) / 180;
				const removed = i === 2;
				const d = D + (removed ? 140 * cut : 0);
				const color = removed ? interpolateColors(cut, [0, 1], [ing.color, '#4a4f63']) : ing.color;
				return (
					<div
						key={ing.example}
						style={{
							position: 'absolute',
							left: CENTER.x + Math.cos(rad) * d - R,
							top: CENTER.y + Math.sin(rad) * d - R,
							width: 2 * R,
							height: 2 * R,
							boxSizing: 'border-box',
							borderRadius: '50%',
							border: `4px ${removed && cut > 0.5 ? 'dashed' : 'solid'} ${color}`,
							backgroundColor: alpha(color, 0.14),
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							fontSize: 30,
							fontWeight: 800,
							lineHeight: 1.05,
							color: removed ? interpolateColors(cut, [0, 1], ['#eef1fb', '#6b7088']) : '#eef1fb',
							opacity: fadeIn * (removed ? 1 - 0.4 * cut : 1),
						}}
					>
						{ing.label[0]}
						<br />
						{ing.label[1]}
					</div>
				);
			})}
			<div
				style={{
					position: 'absolute',
					top: 690,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontSize: 100,
					fontWeight: 800,
					opacity: interpolate(s, [2.2, 2.8], [0, 1], clamp),
					translate: interpolate(s, [2.2, 2.9], ['0px 20px', '0px 0px'], {...clamp, easing: ease}),
				}}
			>
				Break the triangle
			</div>
			<div
				style={{
					position: 'absolute',
					top: 830,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontSize: 50,
					color: '#9aa3c4',
					opacity: interpolate(s, [2.8, 3.4], [0, 1], clamp),
				}}
			>
				Remove one ingredient, and the attack path closes.
			</div>
			<AbsoluteFill style={{backgroundColor: BLACK, opacity: interpolate(s, [4.4, 5], [0, 1], clamp)}} />
		</AbsoluteFill>
	);
};
