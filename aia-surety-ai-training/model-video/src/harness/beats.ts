// One order-status question, from request to stop, split into beats.
// Times are in seconds, local to the beat.

export type NodeId = 'you' | 'harness' | 'model' | 'tools';

export type Leg = {
	readonly from: NodeId;
	readonly to: NodeId;
	readonly at: number;
	readonly dur?: number;
};

export type Beat = {
	readonly id:
		| 'cast'
		| 'user'
		| 'ask'
		| 'toolUse'
		| 'checks'
		| 'mcpCall'
		| 'mcpResult'
		| 'toolResult'
		| 'turnTwo'
		| 'stop'
		| 'limits';
	readonly seconds: number;
	readonly legs: readonly Leg[];
	readonly captions: readonly {readonly text: string; readonly from: number}[];
	// The node that glows for the whole beat, when no packet decides it.
	readonly focus?: NodeId;
};

export const LEG_SECONDS = 0.8;

export const BEATS: readonly Beat[] = [
	{
		id: 'cast',
		seconds: 6,
		legs: [],
		captions: [{text: 'Model proposes. Harness coordinates. Tools do the work.', from: 0}],
	},
	{
		id: 'user',
		seconds: 5,
		legs: [{from: 'you', to: 'harness', at: 0.5}],
		captions: [{text: 'You give the harness a goal.', from: 0}],
	},
	{
		id: 'ask',
		seconds: 7,
		legs: [{from: 'harness', to: 'model', at: 0.5}],
		captions: [{text: 'The harness sends your request and a menu of tools.', from: 0}],
	},
	{
		id: 'toolUse',
		seconds: 8,
		legs: [{from: 'model', to: 'harness', at: 0.5}],
		captions: [
			{text: 'The model cannot run tools. It asks the harness to run one.', from: 0},
			{text: '“tool_use” means: run this tool, then come back to me.', from: 4},
		],
	},
	{
		id: 'checks',
		seconds: 6,
		legs: [],
		focus: 'harness',
		captions: [{text: 'The harness checks the request before it runs anything.', from: 0}],
	},
	{
		id: 'mcpCall',
		seconds: 6,
		legs: [{from: 'harness', to: 'tools', at: 0.5}],
		captions: [{text: 'The harness calls the tool over MCP, a standard connector.', from: 0}],
	},
	{
		id: 'mcpResult',
		seconds: 6,
		legs: [{from: 'tools', to: 'harness', at: 0.5}],
		captions: [{text: 'The tool does the work and returns the result.', from: 0}],
	},
	{
		id: 'toolResult',
		seconds: 7,
		legs: [{from: 'harness', to: 'model', at: 0.5}],
		captions: [{text: 'The harness adds the result and asks the model again.', from: 0}],
	},
	{
		id: 'turnTwo',
		seconds: 9,
		legs: [
			{from: 'model', to: 'harness', at: 0.3, dur: 0.7},
			{from: 'harness', to: 'tools', at: 2.3, dur: 0.7},
			{from: 'tools', to: 'harness', at: 4.3, dur: 0.7},
			{from: 'harness', to: 'model', at: 6.3, dur: 0.7},
		],
		captions: [
			{text: 'The loop repeats. Now the model tracks the package.', from: 0},
			{text: 'Each result shapes the model’s next step.', from: 5},
		],
	},
	{
		id: 'stop',
		seconds: 10,
		legs: [
			{from: 'model', to: 'harness', at: 0.5},
			{from: 'harness', to: 'you', at: 5.5},
		],
		captions: [
			{text: 'This time the model answers with text and no tool request.', from: 0},
			{text: '“end_turn” means done. The harness stops the loop.', from: 4.5},
		],
	},
	{
		id: 'limits',
		seconds: 8,
		legs: [],
		focus: 'harness',
		captions: [{text: 'The harness also stops the loop on limits it sets.', from: 0}],
	},
];

export const BEAT_STARTS = BEATS.reduce<number[]>(
	(starts, _beat, i) => [...starts, i === 0 ? 0 : starts[i - 1] + BEATS[i - 1].seconds],
	[],
);

export const FLOW_SECONDS = BEATS.reduce((sum, beat) => sum + beat.seconds, 0);

// Every leg on the global timeline, in seconds.
export const ALL_LEGS = BEATS.flatMap((beat, i) =>
	beat.legs.map((leg) => ({
		...leg,
		start: BEAT_STARTS[i] + leg.at,
		dur: leg.dur ?? LEG_SECONDS,
	})),
);
