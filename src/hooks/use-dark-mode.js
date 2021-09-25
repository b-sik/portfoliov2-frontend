import { useState, useEffect } from 'react';

/**
 * Custom hook for dark mode functionality.
 * @param {boolean} defaultValue Default mode.
 * 
 * @returns {Array<Boolean, Function>}
 */
export const useDarkMode = (defaultValue = false) => {
	const key = 'darkMode';

	const stored = localStorage.getItem('darkMode');
	const initial = stored ? JSON.parse(stored) : defaultValue;
	const [value, setValue] = useState(initial);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));

		const { classList } = document.documentElement;

		if (true === value) {
			classList.add('dark');
		} else if (false === value) {
			classList.remove('dark');
		}
	}, [value]);

	return [value, setValue];
};
