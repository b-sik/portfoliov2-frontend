import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';
// import { handleKeyDown } from '../../utilities/keydown';

const ColorPicker = () => {
	return (
		<div
			data-tip="Pick a theme color"
			id="color-picker-icon-div"
			onClick={() => null}
			onKeyDown={(e) => null}
			className="my-auto ml-4 hover:animate-hover-pulse cursor-pointer"
			role="tab"
			tabIndex="0"
		>
			<FontAwesomeIcon
				className={'text-black dark:text-gray-200 dark:opacity-80'}
				icon={faEyeDropper}
			/>
		</div>
	);
};

export default ColorPicker;
