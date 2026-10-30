import {interpolate, useCurrentFrame} from 'remotion';
import {SceneFrame} from '../components';
import {C, alpha, clamp, ease} from '../theme';
import {NODE_COLORS} from './Diagram';

const ROLES = [
	{name: 'Model', role: 'proposes', color: NODE_COLORS.model},
	{name: 'Harness', role: 'coordinates', color: NODE_COLORS.harness},
	{name: 'Tools', role: 'perform operations', color: NODE_COLORS.tools},
];

export const HarnessClosing = () => {
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
				<div style={{display: 'flex', gap: 30}}>
					{ROLES.map((r, i) => (
						<div
							key={r.name}
							style={{
								padding: '18px 34px',
								borderRadius: 22,
								border: `4px solid ${r.color}`,
								backgroundColor: alpha(r.color, 0.12),
								fontSize: 48,
								...lineIn(i * 10),
							}}
						>
							<span style={{fontWeight: 800, color: r.color}}>{r.name}:</span> {r.role}
						</div>
					))}
				</div>
				<div style={{fontSize: 64, fontWeight: 800, color: C.accent, ...lineIn(45)}}>
					A tool request is not permission. The harness decides.
				</div>
				<div style={{fontSize: 52, color: C.text, ...lineIn(80)}}>
					The loop stops when the model is done, or when a limit is hit.
				</div>
			</div>
		</SceneFrame>
	);
};
