import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {useVideoConfig} from 'remotion';
import {TitleScene} from '../scenes/TitleScene';
import {SKILL_SCENE_SECONDS, SkillScene} from './SkillScene';

const FADE_FRAMES = 15;
const TITLE_SECONDS = 2.5;
const CLOSING_SECONDS = 3.5;

// Total length at 30 fps, minus the two crossfades. 20 seconds.
export const SKILL_FRAMES =
	(TITLE_SECONDS + SKILL_SCENE_SECONDS + CLOSING_SECONDS) * 30 - 2 * FADE_FRAMES;

export const SkillVideo = () => {
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
				<TitleScene title="Skills load on demand" subtitle="The harness fetches one when the task needs it" />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Skill" durationInFrames={SKILL_SCENE_SECONDS * fps}>
				<SkillScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Closing" durationInFrames={CLOSING_SECONDS * fps}>
				<TitleScene
					title="Skills wait on the shelf"
					subtitle="Not in the window, until a task calls for them"
				/>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
