/**
 * Utility to help organize Tailwind CSS classes when it becomes overwhelming for a component.
 * @param {Object<string>} styles
 * @returns {string} Single string of all CSS classes.
 */
const stylesHelper = (styles) => {
	return Object.values(styles)
		.map((value) => value)
		.join(' ');
};

export default stylesHelper;
