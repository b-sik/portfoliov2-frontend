module.exports = {
	purge: ['./src/**/*.html', './src/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateRows: {
				// Complex site-specific row configuration
			   'nav-about-layout': 'auto 1fr',
			  },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [`gatsby-plugin-postcss`],
};
