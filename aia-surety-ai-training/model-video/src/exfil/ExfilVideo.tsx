import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {useVideoConfig} from 'remotion';
import {TitleScene} from '../scenes/TitleScene';
import {EXFIL_SCENE_SECONDS, ExfilScene} from './ExfilScene';

const FADE_FRAMES = 15;
const TITLE_SECONDS = 3;
const CLOSING_SECONDS = 4.5;

// Total length at 30 fps, minus the two crossfades. About 29.5 seconds.
export const EXFIL_FRAMES =
	(TITLE_SECONDS + EXFIL_SCENE_SECONDS + CLOSING_SECONDS) * 30 - 2 * FADE_FRAMES;

export const ExfilVideo = () => {
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
					title="Data exfiltration"
					subtitle="PromptArmor turned Claude Cowork against its user"
				/>
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Attack" durationInFrames={EXFIL_SCENE_SECONDS * fps}>
				<ExfilScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Closing" durationInFrames={CLOSING_SECONDS * fps}>
				<TitleScene
					title="The lethal trifecta"
					subtitle="Private data, untrusted content, and a way out"
				/>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
