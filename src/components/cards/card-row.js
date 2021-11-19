import React from 'react';

const CardRow = ({ children, rowStart, currentRow }) => {
	return (
		<div
			className={`col-span-full md:col-start-2 md:col-end-12 row-start-${
				rowStart + currentRow
			} row-end-${
				rowStart + 1 + currentRow
			} flex items-center justify-around my-6`}
		>
			{children}
		</div>
	);
};

export default CardRow;
