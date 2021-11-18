/**
 * Utility to help organize Tailwind CSS classes when it becomes overwhelming for a component.
 *
 * Organize your classes in a simple object with one layer of , however you'd like e.g.
 * ```
 * let componentStyles = {
 *  dimensions: 'w-80 h-50',
 *  spacing: 'mt-4 p-2',
 *  etc...
 * }
 * ```
 * @param {Object<string>} styles
 * @returns {string} Single string of all CSS classes.
 */
const stylesHelper = (styles) => {
	const helper = {
		styles: null,
		get all() {
			return null !== this.styles
				? Object.values(this.styles)
						.map((value) => value)
						.join(' ')
				: '';
		},
	};
	helper.styles = styles;
	styles = helper.all;

	return styles;
};

export default stylesHelper;
