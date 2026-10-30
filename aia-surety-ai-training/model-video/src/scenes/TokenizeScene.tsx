import {interpolate, random, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption, SceneFrame, SceneTitle} from '../components';
import {C, PROMPT_TOKENS, TOKEN_COLORS, alpha, clamp, ease} from '../theme';

// Teaching values, not the IDs of a real tokenizer.
const TOKEN_IDS = [5618, 3708, 279, 7554, 6020];
const EMBEDDING_ROWS = 6;

export const TokenizeScene = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const split = interpolate(frame, [1.5 * fps, 2.8 * fps], [0, 1], {
		...clamp,
		easing: ease,
	});
	const idsIn = interpolate(frame, [4 * fps, 4.6 * fps], [0, 1], clamp);

	return (
		<SceneFrame>
			<SceneTitle step="Step 1">Text becomes tokens</SceneTitle>
			<div
				style={{
					position: 'absolute',
					top: 330,
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-start',
					gap: interpolate(split, [0, 1], [0, 44]),
				}}
			>
				{PROMPT_TOKENS.map((token, i) => {
					const color = TOKEN_COLORS[i];
					return (
						<div
							key={token}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: 18,
							}}
						>
							<div
								style={{
									border: `4px solid ${alpha(color, split)}`,
									backgroundColor: alpha(color, split * 0.14),
									borderRadius: 18,
									padding: `14px ${interpolate(split, [0, 1], [8, 26])}px`,
									fontSize: 64,
									fontWeight: 600,
									whiteSpace: 'nowrap',
								}}
							>
								{token}
							</div>
							<div
								style={{
									fontSize: 40,
									fontWeight: 600,
									color,
									opacity: idsIn,
									fontVariantNumeric: 'tabular-nums',
								}}
							>
								#{TOKEN_IDS[i]}
							</div>
							<div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
								{new Array(EMBEDDING_ROWS).fill(0).map((_, j) => {
									const value = random(`emb-${i}-${j}`) * 2 - 1;
									const start = 6.2 * fps + i * 4 + j * 3;
									const cellIn = interpolate(frame, [start, start + 10], [0, 1], {
										...clamp,
										easing: ease,
									});
									return (
										<div
											key={j}
											style={{
												width: 130,
												height: 40,
												borderRadius: 8,
												backgroundColor: color,
												opacity: cellIn * (0.3 + 0.7 * Math.abs(value)),
												scale: `${cellIn} 1`,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												fontSize: 26,
												fontWeight: 600,
												color: C.bg,
												fontVariantNumeric: 'tabular-nums',
											}}
										>
											{value.toFixed(2)}
										</div>
									);
								})}
								<div
									style={{
										textAlign: 'center',
										fontSize: 40,
										color: C.muted,
										opacity: interpolate(frame, [7.2 * fps, 7.6 * fps], [0, 1], clamp),
									}}
								>
									⋮
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<Caption from={0} to={1.5 * fps}>
				It starts with your text.
			</Caption>
			<Caption from={1.5 * fps} to={4 * fps}>
				The text is split into tokens: words or pieces of words.
			</Caption>
			<Caption from={4 * fps} to={6.2 * fps}>
				Each token gets an ID number.
			</Caption>
			<Caption from={6.2 * fps} to={9 * fps}>
				Then each token becomes a long list of numbers.
			</Caption>
		</SceneFrame>
	);
};
