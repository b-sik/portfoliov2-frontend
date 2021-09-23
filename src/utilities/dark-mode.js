/**
 * Dark mode.
 * @param {boolean} bool Toggle dark mode.
 * 
 * @see {@link https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually}
 */
export const toggleDarkMode = (bool) => {
	if (true === bool) {
		document.documentElement.classList.add('dark');
	} else if (false === bool) {
		document.documentElement.classList.remove('dark');
	}
};
