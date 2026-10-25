import {Sequence, useVideoConfig} from 'remotion';
import {Caption, SceneFrame} from '../components';
import {BEATS, BEAT_STARTS} from './beats';
import {Diagram} from './Diagram';
import {Inspector} from './Inspector';

export const FlowScene = () => {
	const {fps} = useVideoConfig();
	return (
		<SceneFrame>
			<Diagram />
			{BEATS.map((beat, i) => (
				<Sequence
					key={beat.id}
					name={beat.id}
					from={Math.round(BEAT_STARTS[i] * fps)}
					durationInFrames={Math.round(beat.seconds * fps)}
				>
					<Inspector id={beat.id} seconds={beat.seconds} />
					{beat.captions.map((caption, k) => (
						<Caption
							key={caption.text}
							from={caption.from * fps}
							to={(beat.captions[k + 1]?.from ?? beat.seconds) * fps}
						>
							{caption.text}
						</Caption>
					))}
				</Sequence>
			))}
		</SceneFrame>
	);
};
