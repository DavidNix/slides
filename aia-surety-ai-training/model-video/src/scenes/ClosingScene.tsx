import {interpolate, useCurrentFrame} from 'remotion';
import {SceneFrame} from '../components';
import {C, alpha, clamp, ease} from '../theme';

const STEPS = ['Tokens in', 'Layers of math', 'Probabilities', 'Next token', 'Repeat'];

export const ClosingScene = () => {
	const frame = useCurrentFrame();
	const lineIn = (at: number) => ({
		opacity: interpolate(frame, [at, at + 15], [0, 1], clamp),
		translate: interpolate(frame, [at, at + 20], ['0px 20px', '0px 0px'], {
			...clamp,
			easing: ease,
		}),
	});
	return (
		<SceneFrame>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 70,
				}}
			>
				<div style={{display: 'flex', alignItems: 'center', gap: 22}}>
					{STEPS.map((step, i) => (
						<div key={step} style={{display: 'flex', alignItems: 'center', gap: 22, ...lineIn(i * 8)}}>
							{i > 0 ? <span style={{fontSize: 48, color: C.muted}}>→</span> : null}
							<span
								style={{
									padding: '14px 26px',
									borderRadius: 18,
									border: `3px solid ${C.blue}`,
									backgroundColor: alpha(C.blue, 0.12),
									fontSize: 44,
									fontWeight: 600,
									whiteSpace: 'nowrap',
								}}
							>
								{step}
							</span>
						</div>
					))}
				</div>
				<div style={{fontSize: 58, color: C.text, ...lineIn(50)}}>
					No magic. A prediction, repeated very fast.
				</div>
				<div style={{fontSize: 66, fontWeight: 800, color: C.accent, ...lineIn(80)}}>
					A likely next token is not a guarantee of truth.
				</div>
			</div>
		</SceneFrame>
	);
};
