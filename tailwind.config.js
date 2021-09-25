module.exports = {
	purge: ['./src/**/*.html', './src/**/*.js'],
	darkMode: 'class',
	theme: {
		extend: {
			gridTemplateRows: {
				'nav-section-layout': 'auto 1fr',
				'about-layout': '25vh 1fr 1fr',
				'about-layout-mobile': '20vh 1fr 1fr',
			},
			animation: {
				'hover-pulse': 'hoverPulse 1s linear infinite',
				'hover-grow': 'hoverGrow 200ms linear 1 forwards',
			},
			keyframes: {
				hoverPulse: {
					'0%, 100%': {
						transform: 'scale(1)',
					},
					'50%': {
						transform: 'scale(1.05)',
					},
				},
				hoverGrow: {
					'0%': {
						transform: 'scale(1)',
					},
					'100%': {
						transform: 'scale(1.025)',
					},
				},
			},
			boxShadow: {
				'lg-white': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, .05)'
			}
		},
	},
	variants: {
		extend: {
			animation: ['hover'],
			boxShadow: ['dark']
		},
	},
	plugins: [`gatsby-plugin-postcss`],
};
