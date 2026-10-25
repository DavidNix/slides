import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {useVideoConfig} from 'remotion';
import {TitleScene} from '../scenes/TitleScene';
import {FLOW_SECONDS} from './beats';
import {FlowScene} from './FlowScene';
import {HarnessClosing} from './HarnessClosing';

const FADE_FRAMES = 15;
const TITLE_SECONDS = 4;
const CLOSING_SECONDS = 7;

// Total length at 30 fps, minus the two crossfades.
export const HARNESS_FRAMES = (TITLE_SECONDS + FLOW_SECONDS + CLOSING_SECONDS) * 30 - 2 * FADE_FRAMES;

export const HarnessVideo = () => {
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
				<TitleScene
					title="How an agent uses a tool"
					subtitle="The model, the harness, and one tool call, end to end"
				/>
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Flow" durationInFrames={FLOW_SECONDS * fps}>
				<FlowScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Closing" durationInFrames={CLOSING_SECONDS * fps}>
				<HarnessClosing />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
