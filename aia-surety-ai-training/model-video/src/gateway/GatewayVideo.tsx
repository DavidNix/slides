import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {useVideoConfig} from 'remotion';
import {TitleScene} from '../scenes/TitleScene';
import {GATEWAY_SCENE_SECONDS, GatewayScene} from './GatewayScene';

const FADE_FRAMES = 15;
const TITLE_SECONDS = 3;
const CLOSING_SECONDS = 4;

// Total length at 30 fps, minus the two crossfades. 27 seconds.
export const GATEWAY_FRAMES =
	(TITLE_SECONDS + GATEWAY_SCENE_SECONDS + CLOSING_SECONDS) * 30 - 2 * FADE_FRAMES;

export const GatewayVideo = () => {
	const {fps} = useVideoConfig();
	const crossfade = (
		<TransitionSeries.Transition
			presentation={fade()}
			timing={linearTiming({durationInFrames: FADE_FRAMES})}
		/>
	);
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence name="Title" durationInFrames={TITLE_SECONDS * fps}>
				<TitleScene title="The AI gateway" subtitle="One place to enforce and observe model requests" />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Gateway" durationInFrames={GATEWAY_SCENE_SECONDS * fps}>
				<GatewayScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Closing" durationInFrames={CLOSING_SECONDS * fps}>
				<TitleScene
					title="One point of control"
					subtitle="It governs only the traffic routed through it"
				/>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
