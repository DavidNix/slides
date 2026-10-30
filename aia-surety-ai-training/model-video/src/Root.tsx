import {Composition} from 'remotion';
import {EXFIL_FRAMES, ExfilVideo} from './exfil/ExfilVideo';
import {GATEWAY_FRAMES, GatewayVideo} from './gateway/GatewayVideo';
import {HARNESS_FRAMES, HarnessVideo} from './harness/HarnessVideo';
import {McpVideo, MCP_FRAMES} from './mcp/McpVideo';
import {ModelVideo} from './ModelVideo';
import {PROMPT_FRAMES, PromptVideo} from './prompt/PromptVideo';
import {SKILL_FRAMES, SkillVideo} from './skill/SkillVideo';
import {TRIFECTA_FRAMES, TrifectaVideo} from './trifecta/TrifectaVideo';

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
		<Composition
			id="PromptShiftsOdds"
			component={PromptVideo}
			durationInFrames={PROMPT_FRAMES}
			fps={30}
			width={1920}
			height={1080}
		/>
		<Composition
			id="CoworkExfiltration"
			component={ExfilVideo}
			durationInFrames={EXFIL_FRAMES}
			fps={30}
			width={1920}
			height={1080}
		/>
		<Composition
			id="SkillLoadsOnDemand"
			component={SkillVideo}
			durationInFrames={SKILL_FRAMES}
			fps={30}
			width={1920}
			height={1080}
		/>
		<Composition
			id="LethalTrifecta"
			component={TrifectaVideo}
			durationInFrames={TRIFECTA_FRAMES}
			fps={30}
			width={1920}
			height={1080}
		/>
		<Composition
			id="AgentMcp"
			component={McpVideo}
			durationInFrames={MCP_FRAMES}
			fps={30}
			width={1920}
			height={1080}
		/>
		<Composition
			id="AiGateway"
			component={GatewayVideo}
			durationInFrames={GATEWAY_FRAMES}
			fps={30}
			width={1920}
			height={1080}
		/>
	</>
);
