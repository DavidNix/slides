import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, Chip, SceneFrame, SceneTitle} from '../components';
import {C, PROMPT_TOKENS, TOKEN_COLORS, clamp, ease} from '../theme';

const CHIP_W = 280;
const ROW_Y = 720;
const ARC_Y = 662;
const xOf = (i: number) => 340 + i * 310;

// Teaching weights for how much "financial" draws on each earlier token.
const FOCUS = 4;
const WEIGHTS = [0.06, 0.3, 0.04, 0.6];

const control = (a: number, b: number) => ({
	x: (xOf(a) + xOf(b)) / 2,
	y: ARC_Y - Math.abs(xOf(b) - xOf(a)) * 0.55,
});

const arcPath = (a: number, b: number) => {
	const c = control(a, b);
	return `M ${xOf(a)} ${ARC_Y} Q ${c.x} ${c.y} ${xOf(b)} ${ARC_Y}`;
};

// A point on the quadratic arc from token a to token b, t in 0..1.
const pointOn = (a: number, b: number, t: number) => {
	const c = control(a, b);
	const u = 1 - t;
	return {
		x: u * u * xOf(a) + 2 * u * t * c.x + t * t * xOf(b),
		y: u * u * ARC_Y + 2 * u * t * c.y + t * t * ARC_Y,
	};
};

const ALL_PAIRS = PROMPT_TOKENS.flatMap((_, b) =>
	PROMPT_TOKENS.slice(0, b).map((__, a) => [a, b] as const),
);

export const AttentionScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const phaseTwo = 6.3 * fps;
	const focusOut = interpolate(frame, [phaseTwo, phaseTwo + 15], [1, 0], clamp);
	const allIn = interpolate(frame, [phaseTwo + 10, phaseTwo + 40], [0, 1], {
		...clamp,
		easing: ease,
	});
	const focusGlow = interpolate(frame, [10, 30], [0, 1], clamp) * focusOut;

	return (
		<SceneFrame>
			<SceneTitle step="Step 2">Attention: tokens look at each other</SceneTitle>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{WEIGHTS.map((w, i) => {
					const start = 30 + i * 12;
					const drawn = interpolate(frame, [start, start + 25], [0, 1], {
						...clamp,
						easing: ease,
					});
					const pulseT = ((frame - start - 25) % 45) / 45;
					const pulse = pointOn(i, FOCUS, pulseT);
					return (
						<g key={i} opacity={focusOut}>
							<path
								d={arcPath(i, FOCUS)}
								fill="none"
								stroke={TOKEN_COLORS[i]}
								strokeWidth={3 + 34 * w}
								strokeLinecap="round"
								strokeOpacity={0.4 + w}
								pathLength={1}
								strokeDasharray={1}
								strokeDashoffset={1 - drawn}
							/>
							{frame > start + 25 ? (
								<circle
									cx={pulse.x}
									cy={pulse.y}
									r={8 + 14 * w}
									fill={C.text}
									opacity={0.9}
								/>
							) : null}
						</g>
					);
				})}
				{ALL_PAIRS.map(([a, b], k) => {
					const pulseT = ((frame + k * 7) % 40) / 40;
					const pulse = pointOn(a, b, pulseT);
					return (
						<g key={`${a}-${b}`} opacity={allIn}>
							<path
								d={arcPath(a, b)}
								fill="none"
								stroke={TOKEN_COLORS[a]}
								strokeWidth={5}
								strokeOpacity={0.55}
								pathLength={1}
								strokeDasharray={1}
								strokeDashoffset={1 - allIn}
							/>
							<circle cx={pulse.x} cy={pulse.y} r={8} fill={C.text} opacity={0.85} />
						</g>
					);
				})}
			</svg>
			{WEIGHTS.map((w, i) => {
				const start = 30 + i * 12;
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: xOf(i) - 80,
							top: ROW_Y + 70,
							width: 160,
							textAlign: 'center',
							fontSize: 42,
							fontWeight: 800,
							color: TOKEN_COLORS[i],
							opacity: interpolate(frame, [start + 25, start + 35], [0, 1], clamp) * focusOut,
						}}
					>
						{Math.round(w * 100)}%
					</div>
				);
			})}
			{PROMPT_TOKENS.map((token, i) => (
				<Chip
					key={token}
					color={TOKEN_COLORS[i]}
					style={{
						position: 'absolute',
						left: xOf(i) - CHIP_W / 2,
						top: ROW_Y - 52,
						width: CHIP_W,
						boxSizing: 'border-box',
						scale: i === FOCUS ? 1 + 0.08 * focusGlow : 1,
						boxShadow:
							i === FOCUS ? `0 0 ${60 * focusGlow}px ${TOKEN_COLORS[i]}` : undefined,
					}}
				>
					{token}
				</Chip>
			))}
			<Caption from={0} to={3.6 * fps}>
				To understand “financial”, the model checks which earlier words matter.
			</Caption>
			<Caption from={3.6 * fps} to={phaseTwo}>
				“missing” and “send” matter most here. Context shapes meaning.
			</Caption>
			<Caption from={phaseTwo} to={10 * fps}>
				Every token does this with every earlier token, all at the same time.
			</Caption>
		</SceneFrame>
	);
};
