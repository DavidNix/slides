import type React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, clamp, ease, fontFamily} from './theme';

export const SceneFrame: React.FC<{readonly children: React.ReactNode}> = ({
	children,
}) => (
	<AbsoluteFill style={{backgroundColor: C.bg, fontFamily, color: C.text}}>
		{children}
	</AbsoluteFill>
);

export const SceneTitle: React.FC<{
	readonly step?: string;
	readonly children: React.ReactNode;
}> = ({step, children}) => {
	const frame = useCurrentFrame();
	return (
		<div
			style={{
				position: 'absolute',
				top: 80,
				left: 0,
				right: 0,
				textAlign: 'center',
				opacity: interpolate(frame, [0, 15], [0, 1], clamp),
				translate: interpolate(frame, [0, 20], ['0px 20px', '0px 0px'], {
					...clamp,
					easing: ease,
				}),
			}}
		>
			{step ? (
				<div
					style={{
						fontSize: 34,
						fontWeight: 600,
						color: C.accent,
						letterSpacing: 4,
						textTransform: 'uppercase',
						marginBottom: 10,
					}}
				>
					{step}
				</div>
			) : null}
			<div style={{fontSize: 72, fontWeight: 800}}>{children}</div>
		</div>
	);
};

// A narration line at the bottom of the frame, visible from `from` to `to`.
export const Caption: React.FC<{
	readonly from: number;
	readonly to: number;
	readonly children: React.ReactNode;
}> = ({from, to, children}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(
		frame,
		[from, from + 12, to - 12, to],
		[0, 1, 1, 0],
		clamp,
	);
	if (opacity === 0) {
		return null;
	}
	return (
		<div
			style={{
				position: 'absolute',
				bottom: 100,
				left: 160,
				right: 160,
				textAlign: 'center',
				fontSize: 50,
				fontWeight: 400,
				lineHeight: 1.3,
				color: C.text,
				opacity,
				translate: interpolate(frame, [from, from + 18], ['0px 16px', '0px 0px'], {
					...clamp,
					easing: ease,
				}),
			}}
		>
			{children}
		</div>
	);
};

export const Chip: React.FC<{
	readonly color: string;
	readonly children: React.ReactNode;
	readonly style?: React.CSSProperties;
}> = ({color, children, style}) => (
	<div
		style={{
			border: `4px solid ${color}`,
			backgroundColor: `${color}22`,
			borderRadius: 18,
			padding: '14px 24px',
			fontSize: 50,
			fontWeight: 600,
			color: C.text,
			textAlign: 'center',
			whiteSpace: 'nowrap',
			...style,
		}}
	>
		{children}
	</div>
);
