import React from 'react';
import Icons from '../icons';

const CardHeading = ({ title, icon = null }) => {
	return (
		<div className="flex w-full justify-between">
			<h4 className="mb-2">{title}</h4>
			{icon ? (
				<Icons
					iconName={icon}
					classnames={`text-3xl -mt-1 -mr-1 md:-mt-2 md:-mr-2 ${
						icon === 'faReact' && 'hover:animate-spin'
					}`}
				/>
			) : null}
		</div>
	);
};

export default CardHeading;
