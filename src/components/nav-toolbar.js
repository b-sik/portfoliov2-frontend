import React from 'react';
import DarkMode from './nav-tools/dark-mode';
import ColorPicker from './nav-tools/color-picker';
import ReactTooltip from 'react-tooltip';

const NavToolbar = () => {
	return (
		<div
			id="nav-toolbar"
			role="tablist"
			className="flex justify-around content-center w-10 justify-self-end"
		>
			<ReactTooltip
				type={'light'}
				delayShow={500}
				place={'left'}
			/>
			<DarkMode />
			<ColorPicker />
		</div>
	);
};

export default NavToolbar;