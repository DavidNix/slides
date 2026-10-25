import {Composition} from 'remotion';
import {ModelVideo} from './ModelVideo';

// Scenes total 60 seconds at 30 fps, minus six 15-frame crossfades.
export const RemotionRoot = () => (
	<Composition
		id="WhatTheModelDoes"
		component={ModelVideo}
		durationInFrames={1710}
		fps={30}
		width={1920}
		height={1080}
	/>
);
