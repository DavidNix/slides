import type React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, alpha, clamp, ease, monoFamily} from '../theme';
import type {Beat, NodeId} from './beats';
import {NODE_COLORS, NODE_NAMES} from './Diagram';

const PANEL = {left: 200, top: 480, width: 1520, height: 400};
const GREEN = '#7ee2b8';
const ORANGE = '#ff8a5b';

// Colors keys, strings, numbers, and punctuation in one line of JSON.
const colorize = (line: string) => {
	const parts: React.ReactNode[] = [];
	const re = /("(?:[^"\\]|\\.)*")(\s*:)?|(\b\d+(?:\.\d+)?\b)|([{}[\],])/g;
	let last = 0;
	let m: RegExpExecArray | null;
	while ((m = re.exec(line)) !== null) {
		if (m.index > last) {
			parts.push(line.slice(last, m.index));
		}
		const [text, str, colon, num] = m;
		const color = str ? (colon ? C.blue : GREEN) : num ? ORANGE : C.muted;
		parts.push(
			<span key={m.index} style={{color}}>
				{text}
			</span>,
		);
		last = m.index + text.length;
	}
	parts.push(line.slice(last));
	return parts;
};

const Code: React.FC<{
	readonly lines: readonly string[];
	readonly highlight?: number;
	readonly highlightAt?: number;
}> = ({lines, highlight, highlightAt = 0}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const hl = interpolate(frame, [highlightAt * fps, highlightAt * fps + 10], [0, 1], clamp);
	return (
		<div style={{fontFamily: monoFamily, fontSize: 30, lineHeight: 1.38}}>
			{lines.map((line, i) => (
				<div
					key={i}
					style={{
						whiteSpace: 'pre',
						borderRadius: 8,
						padding: '0 12px',
						marginLeft: -12,
						backgroundColor: i === highlight ? alpha(C.accent, 0.22 * hl) : 'transparent',
						outline: i === highlight ? `3px solid ${alpha(C.accent, hl)}` : undefined,
					}}
				>
					{colorize(line)}
				</div>
			))}
		</div>
	);
};

// A line that fades in at `at` seconds into the beat.
const Appear: React.FC<{
	readonly at: number;
	readonly children: React.ReactNode;
	readonly style?: React.CSSProperties;
}> = ({at, children, style}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	return (
		<div
			style={{
				opacity: interpolate(frame, [at * fps, at * fps + 10], [0, 1], clamp),
				translate: interpolate(frame, [at * fps, at * fps + 14], ['0px 12px', '0px 0px'], {
					...clamp,
					easing: ease,
				}),
				...style,
			}}
		>
			{children}
		</div>
	);
};

const Plain: React.FC<{readonly at: number; readonly children: React.ReactNode}> = ({
	at,
	children,
}) => (
	<Appear at={at} style={{marginTop: 18, fontSize: 34, fontWeight: 600, color: C.accent}}>
		In plain words: {children}
	</Appear>
);

const Route: React.FC<{readonly from: NodeId; readonly to: NodeId}> = ({from, to}) => (
	<span>
		<span style={{color: NODE_COLORS[from]}}>{NODE_NAMES[from]}</span>
		<span style={{color: C.muted}}> → </span>
		<span style={{color: NODE_COLORS[to]}}>{NODE_NAMES[to]}</span>
	</span>
);

const Row: React.FC<{
	readonly at: number;
	readonly mark: string;
	readonly markColor: string;
	readonly children: React.ReactNode;
}> = ({at, mark, markColor, children}) => (
	<Appear at={at} style={{display: 'flex', gap: 22, alignItems: 'baseline', fontSize: 36}}>
		<span style={{color: markColor, fontWeight: 800, width: 36}}>{mark}</span>
		<span>{children}</span>
	</Appear>
);

const LogRow: React.FC<{
	readonly at: number;
	readonly from: NodeId;
	readonly to: NodeId;
	readonly children: React.ReactNode;
}> = ({at, from, to, children}) => (
	<Appear at={at} style={{display: 'flex', gap: 28, alignItems: 'baseline', marginBottom: 18}}>
		<span style={{width: 330, fontSize: 32, fontWeight: 800}}>
			<Route from={from} to={to} />
		</span>
		<span style={{fontFamily: monoFamily, fontSize: 28}}>{children}</span>
	</Appear>
);

const Mono: React.FC<{readonly children: React.ReactNode}> = ({children}) => (
	<span style={{fontFamily: monoFamily, color: C.accent}}>{children}</span>
);

const RoleRow: React.FC<{readonly at: number; readonly who: NodeId; readonly children: string}> = ({
	at,
	who,
	children,
}) => (
	<Appear at={at} style={{display: 'flex', gap: 30, fontSize: 36, marginBottom: 26}}>
		<span style={{width: 200, flexShrink: 0, fontWeight: 800, color: NODE_COLORS[who]}}>
			{NODE_NAMES[who]}
		</span>
		<span>{children}</span>
	</Appear>
);

type Content = {
	readonly header: React.ReactNode;
	readonly tag?: string;
	readonly body: React.ReactNode;
};

const contentFor = (id: Beat['id']): Content => {
	switch (id) {
		case 'cast':
			return {
				header: 'Three parts',
				body: (
					<>
						<RoleRow at={0.4} who="model">
							Proposes the next step. It cannot run anything itself.
						</RoleRow>
						<RoleRow at={0.8} who="harness">
							Ordinary software. Checks requests, runs tools, keeps the conversation.
						</RoleRow>
						<RoleRow at={1.2} who="tools">
							Do concrete work: look up a record, read a file.
						</RoleRow>
					</>
				),
			};
		case 'user':
			return {
				header: <Route from="you" to="harness" />,
				tag: 'Your request',
				body: (
					<Appear at={1} style={{fontSize: 44, lineHeight: 1.35}}>
						“Where is my order 4471? When will it arrive?”
					</Appear>
				),
			};
		case 'ask':
			return {
				header: <Route from="harness" to="model" />,
				tag: 'API request (simplified)',
				body: (
					<>
						<Code
							lines={[
								'{ "system": "Help shoppers. Look things up. Change nothing.",',
								'  "messages": [{ "role": "user",',
								'                 "content": "Where is my order 4471?…" }],',
								'  "tools": ["get_order", "track_package"] }',
							]}
							highlight={3}
							highlightAt={2.5}
						/>
						<Plain at={3.5}>here is the task, and here are the tools you may ask for.</Plain>
					</>
				),
			};
		case 'toolUse':
			return {
				header: <Route from="model" to="harness" />,
				tag: 'API response',
				body: (
					<>
						<Code
							lines={[
								'{ "type": "tool_use",',
								'  "id": "toolu_demo_01",',
								'  "name": "get_order",',
								'  "input": { "order_id": "4471" } }',
								'',
								'"stop_reason": "tool_use"',
							]}
							highlight={5}
							highlightAt={4}
						/>
						<Plain at={2}>please run get_order for order 4471, then come back.</Plain>
					</>
				),
			};
		case 'checks':
			return {
				header: <span style={{color: NODE_COLORS.harness}}>Inside the harness</span>,
				tag: 'Before anything runs',
				body: (
					<div style={{display: 'flex', flexDirection: 'column', gap: 22}}>
						<Row at={0.5} mark="✓" markColor="#06d6a0">
							<Mono>get_order</Mono> is on the allowed tool list.
						</Row>
						<Row at={1.4} mark="✓" markColor="#06d6a0">
							It only reads data. It changes nothing.
						</Row>
						<Row at={2.3} mark="✓" markColor="#06d6a0">
							The input is a valid order number.
						</Row>
						<Row at={3.2} mark="✓" markColor="#06d6a0">
							A read-only lookup needs no approval from a person.
						</Row>
					</div>
				),
			};
		case 'mcpCall':
			return {
				header: <Route from="harness" to="tools" />,
				tag: 'MCP request (JSON-RPC)',
				body: (
					<>
						<Code
							lines={[
								'{ "jsonrpc": "2.0",',
								'  "id": 42,',
								'  "method": "tools/call",',
								'  "params": { "name": "get_order",',
								'              "arguments": { "order_id": "4471" } } }',
							]}
							highlight={1}
							highlightAt={2.5}
						/>
						<Plain at={2}>run get_order with 4471. This is call number 42.</Plain>
					</>
				),
			};
		case 'mcpResult':
			return {
				header: <Route from="tools" to="harness" />,
				tag: 'MCP response',
				body: (
					<>
						<Code
							lines={[
								'{ "id": 42,',
								'  "result": { "text": "Order 4471: running shoes.',
								'                       Status: shipped.',
								'                       Tracking number: 1Z-88X." } }',
							]}
							highlight={0}
							highlightAt={2.5}
						/>
						<Plain at={2.5}>the same ID, 42, tells the harness which call this answers.</Plain>
					</>
				),
			};
		case 'toolResult':
			return {
				header: <Route from="harness" to="model" />,
				tag: 'API request, next turn',
				body: (
					<>
						<Code
							lines={[
								'{ "role": "user",',
								'  "content": [{ "type": "tool_result",',
								'                "tool_use_id": "toolu_demo_01",',
								'                "content": "Order 4471: running shoes. Shipped. …" }] }',
							]}
							highlight={2}
							highlightAt={2.5}
						/>
						<Plain at={3}>here is what get_order returned. What next?</Plain>
					</>
				),
			};
		case 'turnTwo':
			return {
				header: 'Model turn 2: the same steps, faster',
				body: (
					<>
						<LogRow at={0.3} from="model" to="harness">
							tool_use: track_package(&quot;1Z-88X&quot;)
						</LogRow>
						<LogRow at={2.3} from="harness" to="tools">
							tools/call track_package, id 43
						</LogRow>
						<LogRow at={4.3} from="tools" to="harness">
							At the Memphis hub. Arrives Thursday.
						</LogRow>
						<LogRow at={6.3} from="harness" to="model">
							tool_result for toolu_demo_02
						</LogRow>
					</>
				),
			};
		case 'stop':
			return {
				header: <Route from="model" to="harness" />,
				tag: 'API response, model turn 3',
				body: (
					<>
						<Code
							lines={[
								'{ "type": "text",',
								'  "text": "Your running shoes are at the Memphis hub.',
								'           They should arrive Thursday." }',
								'',
								'"stop_reason": "end_turn"',
							]}
							highlight={4}
							highlightAt={2}
						/>
						<Appear at={4.5} style={{marginTop: 18, fontSize: 34, fontWeight: 600}}>
							<span style={{color: C.accent}}>Harness:</span> no tool request and{' '}
							<Mono>end_turn</Mono>, so stop the loop and show you the answer.
						</Appear>
					</>
				),
			};
		case 'limits':
			return {
				header: <span style={{color: NODE_COLORS.harness}}>The harness stops the loop when</span>,
				tag: 'Stop conditions',
				body: (
					<div style={{display: 'flex', flexDirection: 'column', gap: 22}}>
						<Row at={0.4} mark="■" markColor="#ff6b6b">
							The model is done: <Mono>stop_reason</Mono> is <Mono>end_turn</Mono>.
						</Row>
						<Row at={1.4} mark="■" markColor="#ff6b6b">
							A turn limit is hit, for example 20 model turns.
						</Row>
						<Row at={2.4} mark="■" markColor="#ff6b6b">
							A time or cost budget runs out.
						</Row>
						<Row at={3.4} mark="■" markColor="#ff6b6b">
							A person stops it.
						</Row>
					</div>
				),
			};
		default:
			throw new Error(`Unknown beat ${id satisfies never}`);
	}
};

// The panel under the diagram that shows the message for the current beat.
export const Inspector: React.FC<{readonly id: Beat['id']; readonly seconds: number}> = ({
	id,
	seconds,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const {header, tag, body} = contentFor(id);
	const end = seconds * fps;
	const opacity = interpolate(frame, [0, 10, end - 8, end], [0, 1, 1, 0], clamp);
	return (
		<div
			style={{
				position: 'absolute',
				...PANEL,
				boxSizing: 'border-box',
				padding: '26px 48px',
				borderRadius: 28,
				backgroundColor: C.panel,
				border: `3px solid ${C.line}`,
				opacity,
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'baseline',
					fontSize: 34,
					fontWeight: 800,
					marginBottom: 22,
				}}
			>
				<span>{header}</span>
				{tag ? <span style={{fontSize: 28, fontWeight: 600, color: C.muted}}>{tag}</span> : null}
			</div>
			{body}
		</div>
	);
};
