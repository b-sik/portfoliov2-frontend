import React from 'react';

const CardsGrid = ({ children }) => {
	return (
		<div
			className={`col-span-full py-8 overflow-hidden grid grid-cols-12 auto-rows-min`}
		>
			{children}
		</div>
	);
};

export default CardsGrid;
