import {Easing} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';

export const {fontFamily} = loadFont('normal', {
	weights: ['400', '600', '800'],
	subsets: ['latin'],
});

export const C = {
	bg: '#0b1020',
	panel: '#151c36',
	line: '#2a3560',
	text: '#eef1fb',
	muted: '#9aa3c4',
	accent: '#ffd166',
	blue: '#4cc9f0',
	gray: '#5b6690',
};

export const TOKEN_COLORS = ['#ff8a5b', '#ffd166', '#06d6a0', '#4cc9f0', '#b388ff'];

// The example prompt from slide 005.
export const PROMPT_TOKENS = ['Please', 'send', 'the', 'missing', 'financial'];

export const ease = Easing.bezier(0.16, 1, 0.3, 1);

export const clamp = {
	extrapolateLeft: 'clamp',
	extrapolateRight: 'clamp',
} as const;

// Adds an alpha channel (0 to 1) to a #rrggbb color.
export const alpha = (hex: string, a: number) =>
	`${hex}${Math.round(Math.min(1, Math.max(0, a)) * 255)
		.toString(16)
		.padStart(2, '0')}`;
