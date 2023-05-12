module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-15deg)' },
					'50%': { transform: 'rotate(15deg)' }
				},
				heartbeat: {
					'0%': { transform: 'scale(1);' },
					'14%': { transform: 'scale(1.3);' },
					'28%': { transform: 'scale(1);' },
					'42%': { transform: 'scale(1.3);' },
					'70%': { transform: 'scale(1);' }
				},
				flipHorizontal: {
					'50%': { transform: 'rotateY(180deg)' }
				},
				flipVertical: {
					'50%': { transform: 'rotateX(180deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				heartbeat: 'heartbeat 1s infinite',
				hflip: 'flipHorizontal 2s infinite',
				vflip: 'flipVertical 2s infinite'
			}
		}
	},
	plugins: []
};
