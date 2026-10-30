import {interpolate, useCurrentFrame} from 'remotion';
import {SceneFrame} from '../components';
import {C, clamp, ease} from '../theme';

export const TitleScene: React.FC<{
	readonly title: string;
	readonly subtitle: string;
}> = ({title, subtitle}) => {
	const frame = useCurrentFrame();
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
					gap: 30,
				}}
			>
				<div
					style={{
						fontSize: 110,
						fontWeight: 800,
						opacity: interpolate(frame, [0, 20], [0, 1], clamp),
						scale: interpolate(frame, [0, 30], [0.92, 1], {
							...clamp,
							easing: ease,
						}),
					}}
				>
					{title}
				</div>
				<div
					style={{
						fontSize: 52,
						color: C.muted,
						opacity: interpolate(frame, [20, 40], [0, 1], clamp),
					}}
				>
					{subtitle}
				</div>
			</div>
		</SceneFrame>
	);
};
