// Synthesizes the trifecta soundtrack to public/trifecta.wav.
// Run: node scripts/trifecta-sound.mjs
// The times match src/trifecta/timing.ts.
import {writeFileSync} from 'node:fs';

const SR = 22050;
const T = {
	appear: [3.2, 5.0, 6.8],
	pullStart: 9,
	pullEnd: 15.3,
	impact: 15.5,
	fadeOut: 21,
	closing: 22,
	end: 27,
};
const HEARTBEATS = [];
for (let t = 9.4; t < 15.2; t += 1.05 - 0.73 * Math.min(1, (t - T.pullStart) / 6.3)) {
	HEARTBEATS.push(t);
}

const N = SR * T.end;
const out = new Float32Array(N);
const TAU = 2 * Math.PI;
let seed = 7;
const rand = () => {
	seed = (seed * 1664525 + 1013904223) >>> 0;
	return seed / 2 ** 32;
};
const smooth = (x) => {
	const c = Math.min(1, Math.max(0, x));
	return c * c * (3 - 2 * c);
};

// A sine thump whose pitch drops from `from` to `to` Hz.
const kick = (t0, amp, {from, to, drop, decay, len}) => {
	const s0 = Math.floor(t0 * SR);
	let phase = 0;
	for (let k = 0; k < len * SR && s0 + k < N; k++) {
		const dt = k / SR;
		phase += (TAU * (to + (from - to) * Math.exp(-dt * drop))) / SR;
		out[s0 + k] += amp * Math.sin(phase) * Math.exp(-dt * decay) * smooth(k / 40);
	}
};

for (const t of T.appear) {
	kick(t, 0.8, {from: 140, to: 32, drop: 18, decay: 3.5, len: 2});
}
for (const b of HEARTBEATS) {
	kick(b, 0.55, {from: 90, to: 40, drop: 30, decay: 9, len: 0.5});
	kick(b + 0.17, 0.35, {from: 90, to: 40, drop: 30, decay: 9, len: 0.5});
}
kick(T.impact, 1, {from: 160, to: 24, drop: 6, decay: 1.1, len: 5});
// A falling tone when the closing removes one ingredient.
kick(T.closing + 1.4, 0.15, {from: 330, to: 165, drop: 3, decay: 2, len: 2});

// Digital chatter while the records stream out.
for (let t = T.impact + 0.5; t < T.fadeOut; t += 0.02 + rand() * 0.05) {
	const f = 1200 + rand() * 1600;
	const amp = 0.06 * (1 - smooth((t - T.impact) / 6));
	const s0 = Math.floor(t * SR);
	for (let k = 0; k < 0.004 * SR; k++) {
		out[s0 + k] += amp * Math.sign(Math.sin((TAU * f * k) / SR));
	}
}

let riserPhase = 0;
let lp = 0;
let lp2 = 0;
for (let i = 0; i < N; i++) {
	const t = i / SR;
	const n = rand() * 2 - 1;
	lp += 0.02 * (n - lp);
	lp2 += 0.15 * (n - lp2);
	// Everything before the impact cuts out for a beat of silence.
	const gate = 1 - smooth((t - T.pullEnd) / 0.03);
	let x = 0;

	const droneAmp = (0.06 + 0.2 * smooth((t - 0.5) / 15)) * smooth(t / 1.5);
	x += gate * droneAmp * (Math.sin(TAU * 41 * t) + 0.8 * Math.sin(TAU * 41.6 * t) + 0.35 * Math.sin(TAU * 82.5 * t));

	if (t > T.pullStart && t < T.pullEnd + 0.05) {
		const p = (t - T.pullStart) / (T.pullEnd - T.pullStart);
		riserPhase += (TAU * 80 * 2 ** (p * 1.8)) / SR;
		x += gate * 0.16 * p * p * (Math.sin(riserPhase) + 0.3 * Math.sin(2 * riserPhase));
	}

	const rumble = gate * (0.05 + 0.5 * smooth((t - T.pullStart) / 6.3)) * smooth(t / 2);
	x += 3 * lp * rumble;

	if (t >= T.impact) {
		const dt = t - T.impact;
		x += 0.5 * n * Math.exp(-dt * 9) + 0.8 * lp2 * Math.exp(-dt * 2.5) + 1.8 * lp * Math.exp(-dt * 0.5);
		x += 0.035 * Math.sin(TAU * 3900 * t) * Math.exp(-dt * 0.5) * smooth((dt - 0.1) / 0.3);
	}

	if (t >= T.closing) {
		const env = smooth((t - T.closing) / 1.2) * (1 - smooth((t - (T.end - 1.2)) / 1.2));
		x += 0.05 * env * (Math.sin(TAU * 110 * t) + 0.7 * Math.sin(TAU * 164.8 * t) + 0.4 * Math.sin(TAU * 220 * t));
	}

	out[i] += x;
	// Fade the aftermath to silence before the closing.
	if (t >= T.fadeOut && t < T.closing) {
		out[i] *= 1 - smooth((t - T.fadeOut) / 0.9);
	}
}

let peak = 0;
for (let i = 0; i < N; i++) {
	out[i] = Math.tanh(1.2 * out[i]);
	peak = Math.max(peak, Math.abs(out[i]));
}

const data = Buffer.alloc(44 + N * 2);
data.write('RIFF', 0);
data.writeUInt32LE(36 + N * 2, 4);
data.write('WAVEfmt ', 8);
data.writeUInt32LE(16, 16);
data.writeUInt16LE(1, 20);
data.writeUInt16LE(1, 22);
data.writeUInt32LE(SR, 24);
data.writeUInt32LE(SR * 2, 28);
data.writeUInt16LE(2, 32);
data.writeUInt16LE(16, 34);
data.write('data', 36);
data.writeUInt32LE(N * 2, 40);
for (let i = 0; i < N; i++) {
	data.writeInt16LE(Math.round((out[i] / peak) * 0.89 * 32767), 44 + i * 2);
}
writeFileSync(new URL('../public/trifecta.wav', import.meta.url), data);
