module.exports = {
	purge: ['./src/**/*.html', './src/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateRows: {
			   'nav-section-layout': 'auto 1fr',
			  },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [`gatsby-plugin-postcss`],
};
