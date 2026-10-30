import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {useVideoConfig} from 'remotion';
import {TitleScene} from '../scenes/TitleScene';
import {OddsScene} from './OddsScene';

const FADE_FRAMES = 15;
const TITLE_SECONDS = 3;
const ODDS_SECONDS = 24;
const CLOSING_SECONDS = 4.5;

// Total length at 30 fps, minus the two crossfades.
export const PROMPT_FRAMES = (TITLE_SECONDS + ODDS_SECONDS + CLOSING_SECONDS) * 30 - 2 * FADE_FRAMES;

export const PromptVideo = () => {
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
				<TitleScene title="Prompts shift the odds" subtitle="How context changes the model's next word" />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Odds" durationInFrames={ODDS_SECONDS * fps}>
				<OddsScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Closing" durationInFrames={CLOSING_SECONDS * fps}>
				<TitleScene
					title="Context sets the odds"
					subtitle="It makes a word likely, not certain. Check the output."
				/>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
