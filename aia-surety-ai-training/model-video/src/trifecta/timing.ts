// Seconds from the start of the video. scripts/trifecta-sound.mjs uses the
// same numbers, so change both together.
export const T = {
	converge: 3,
	appear: [3.2, 5.0, 6.8],
	pullStart: 9,
	pullEnd: 15.3,
	impact: 15.5,
	fadeOut: 21,
	closing: 22,
	end: 27,
} as const;

// The heartbeat speeds up as the three ingredients close in.
export const HEARTBEATS: number[] = [];
for (let t = 9.4; t < 15.2; t += 1.05 - 0.73 * Math.min(1, (t - T.pullStart) / 6.3)) {
	HEARTBEATS.push(t);
}

// 1 on each beat, decaying fast, with a softer second thump.
export const pulseAt = (s: number) => {
	let p = 0;
	for (const b of HEARTBEATS) {
		if (s >= b) {
			p += Math.exp(-(s - b) * 9);
		}
		if (s >= b + 0.17) {
			p += 0.6 * Math.exp(-(s - b - 0.17) * 9);
		}
	}
	return Math.min(1, p);
};
