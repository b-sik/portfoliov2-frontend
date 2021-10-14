import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { handleKeyDown } from '../../utilities/keydown';
import { useDarkMode } from '../../hooks/use-dark-mode';

const DarkMode = () => {
	const [darkMode, setDarkMode] = useDarkMode();

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	}

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
					'transform -rotate-12 text-lg text-black dark:text-gray-200 dark:opacity-80'
				}
				icon={darkMode ? faSun : faMoon}
			/>
		</div>
	);
};

export default DarkMode;