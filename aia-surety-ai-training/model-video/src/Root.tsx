import {Composition} from 'remotion';
import {HARNESS_FRAMES, HarnessVideo} from './harness/HarnessVideo';
import {ModelVideo} from './ModelVideo';

export const RemotionRoot = () => (
	<>
		{/* Scenes total 60 seconds at 30 fps, minus six 15-frame crossfades. */}
		<Composition
			id="WhatTheModelDoes"
			component={ModelVideo}
			durationInFrames={1710}
			fps={30}
			width={1920}
			height={1080}
		/>
		<Composition
			id="HarnessToolCall"
			component={HarnessVideo}
			durationInFrames={HARNESS_FRAMES}
			fps={30}
			width={1920}
			height={1080}
		/>
	</>
);
