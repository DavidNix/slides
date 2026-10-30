import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {useVideoConfig} from 'remotion';
import {TitleScene} from '../scenes/TitleScene';
import {MCP_SCENE_SECONDS, McpScene} from './McpScene';

const FADE_FRAMES = 15;
const TITLE_SECONDS = 3;
const CLOSING_SECONDS = 4;

// Total length at 30 fps, minus the two crossfades. 25 seconds.
export const MCP_FRAMES = (TITLE_SECONDS + MCP_SCENE_SECONDS + CLOSING_SECONDS) * 30 - 2 * FADE_FRAMES;

export const McpVideo = () => {
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
				<TitleScene title="Agents and MCP" subtitle="One standard plug for many systems" />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Mcp" durationInFrames={MCP_SCENE_SECONDS * fps}>
				<McpScene />
			</TransitionSeries.Sequence>
			{crossfade}
			<TransitionSeries.Sequence name="Closing" durationInFrames={CLOSING_SECONDS * fps}>
				<TitleScene
					title="One plug, many systems"
					subtitle="Each connection is access you grant. Choose with care."
				/>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
