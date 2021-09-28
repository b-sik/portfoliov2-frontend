import React from 'react';
import { handleKeyDown } from '../utilities/keydown';

/**
 * @see {@file './css/UI/toggle.css'}
 */
const Toggle = ({ label, onChange, wrapperClassNames, checked }) => {
	return (
		<div className={wrapperClassNames}>
			<div className="relative inline-block w-10 mr-1 align-middle select-none transition duration-200 ease-in">
				<input
					type="checkbox"
					name="toggle"
					id="toggle"
					className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
					checked={checked}
					onChange={() => onChange()}
					onKeyDown={(e) => handleKeyDown(e, onChange)}
				/>
				{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
				<label
					htmlFor="toggle"
					className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
				></label>
			</div>
			<label htmlFor="toggle" className="text-xs text-gray-700">
				{label}
			</label>
		</div>
	);
};

export default Toggle;
