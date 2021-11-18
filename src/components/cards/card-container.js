import React from 'react';
import stylesHelper from '../../utilities/styles-helper';

const CardContainer = ({ children }) => {
	const cardContainerStyles = stylesHelper({
		display: 'flex flex-col items-center justify-center',
		dimensions: 'h-auto max-w-full',
		spacing: 'mx-8 p-4 md:p-6',
		background: 'bg-white',
		border: 'border rounded-2xl',
		align: 'text-left',
		shadow: 'shadow-lg',
		transition: 'transition-all',
		hover: 'hover:animate-hover-grow hover:shadow-xl',
		darkMode:
			'dark:bg-black dark:border-black dark:hover:shadow-xl-white dark:shadow-lg-white',
	});

	return <div className={cardContainerStyles}>{children}</div>;
};

export default CardContainer;
