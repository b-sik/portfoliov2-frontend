import React from 'react';
import stylesHelper from '../../utilities/styles-helper';

const CardContainer = ({ children, type = '', rowIndex = null }) => {
	const columns = () => {
		switch (type) {
			case 'skill':
				const leftCol = 'col-start-1 col-end-7';
				const rightCol = 'col-start-7 col-end-13';
				return rowIndex !== null
					? 0 === rowIndex
						? leftCol
						: rightCol
					: '';
			case 'project':
				return 'col-start-1 col-end-13';
			default:
				break;
		}
	};

	const cardContainerStyles = stylesHelper({
		id: 'card',
		display: 'flex flex-col items-center justify-center',
		columns: columns(),
		dimensions: 'h-auto max-w-full',
		spacing: 'mx-8 p-4 md:p-6',
		background: 'bg-white',
		opacity: 'bg-opacity-100',
		zIndex: 'z-10',
		border: 'border rounded-2xl',
		align: 'text-left',
		shadow: 'shadow-lg',
		cursor: 'cursor-default',
		transition: 'transition-all',
		hover: 'hover:animate-hover-grow hover:shadow-xl',
		darkMode:
			'dark:bg-black dark:border-black dark:hover:shadow-xl-white dark:shadow-lg-white',
	});

	return <div className={cardContainerStyles}>{children}</div>;
};

export default CardContainer;
