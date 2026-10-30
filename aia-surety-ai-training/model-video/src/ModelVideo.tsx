import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {useVideoConfig} from 'remotion';
import {AttentionScene} from './scenes/AttentionScene';
import {ClosingScene} from './scenes/ClosingScene';
import {LoopScene} from './scenes/LoopScene';
import {SoftmaxScene} from './scenes/SoftmaxScene';
import {TitleScene} from './scenes/TitleScene';
import {TokenizeScene} from './scenes/TokenizeScene';
import {TransformerScene} from './scenes/TransformerScene';

export const FADE_FRAMES = 15;

export const ModelVideo = () => {
	const {fps} = useVideoConfig();
	const crossfade = (
		<TransitionSeries.Transition
			presentation={fade()}
			timing={linearTiming({durationInFrames: FADE_FRAMES})}
		/>
	);
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence name="Title" durationInFrames={4 * fps}>
				<TitleScene
					title="What the model actually does"
					subtitle="How an AI model picks its next word"
				/>
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Tokenize" durationInFrames={9 * fps}>
				<TokenizeScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Attention" durationInFrames={10 * fps}>
				<AttentionScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Transformer" durationInFrames={11 * fps}>
				<TransformerScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Softmax" durationInFrames={12 * fps}>
				<SoftmaxScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Loop" durationInFrames={9 * fps}>
				<LoopScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Closing" durationInFrames={5 * fps}>
				<ClosingScene />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
