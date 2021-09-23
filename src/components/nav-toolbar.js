import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { toggleDarkMode } from '../utilities/dark-mode';

const NavToolbar = () => {
	/**
	 * Dark mode.
	 */
    const [darkMode, setDarkMode] = useState(false);
    
	useEffect(() => {
		toggleDarkMode(darkMode);
    }, [darkMode]);
    
	return (
		<div
			id="nav-toolbar"
			className="flex justify-around content-center w-10"
		>
			<div onClick={() => setDarkMode(!darkMode)} className="my-auto">
				<FontAwesomeIcon
					className={`${!darkMode && 'text-xl text-black'} ${
						darkMode &&
						'transform -rotate-12 text-lg text-white opacity-80'
					}`}
					icon={darkMode ? faMoon : faSun}
				/>
			</div>
		</div>
	);
};

export default NavToolbar;
