module.exports = {
	purge: ['./src/**/*.html', './src/**/*.js'],
	darkMode: 'class',
	theme: {
		extend: {
			gridTemplateRows: {
			   'nav-section-layout': 'auto 1fr',
			   'about-layout': '25vh 1fr 1fr',
			   'about-layout-mobile': '20vh 1fr 1fr'
			  },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [`gatsby-plugin-postcss`],
};
