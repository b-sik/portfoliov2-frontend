import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { handleKeyDown } from '../../utilities/keydown';

const DarkMode = () => {
	const initialDarkModeState = () => {
		let enabled = localStorage.getItem('darkMode');

		if (typeof enabled === 'string') {
			switch (enabled) {
				case 'true':
					enabled = true;
					break;
				case 'false':
					enabled = false;
					break;
				default:
					enabled = false;
			}
		}

		if (null === enabled) {
			enabled = true;
		}

		return enabled;
	};

	/**
	 * Dark mode state.
	 */
	const [darkMode, setDarkMode] = useState(initialDarkModeState());

	/**
	 * Toggle cb.
	 */
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		localStorage.setItem('darkMode', darkMode);

		const { classList } = document.documentElement;

		if (true === darkMode) {
			classList.add('dark');
		} else if (false === darkMode) {
			classList.remove('dark');
		}
	}, [darkMode]);

	return (
		<div
			data-tip="Toggle dark mode on/off"
			id="dark-mode-icon-div"
			onClick={() => toggleDarkMode()}
			onKeyDown={(e) => handleKeyDown(e, toggleDarkMode)}
			className="my-auto hover:animate-hover-pulse cursor-pointer"
			role="tab"
			tabIndex="0"
		>
			<FontAwesomeIcon
				className={
					'transform -rotate-12 text-lg text-black dark:text-white dark:opacity-80'
				}
				icon={darkMode ? faSun : faMoon}
			/>
		</div>
	);
};

export default DarkMode;
