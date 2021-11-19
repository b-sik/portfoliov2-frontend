import React from 'react';

const SectionWrapper = ({ id, children, bgImgSrc = false }) => {
	/**
	 * Gradient.
	 */
	const bgGradient =
		'bg-gradient-to-b from-indigo-300 to-white dark:from-indigo-500 dark:to-black';

	return (
		<section
			id={id}
			className={`relative ${bgGradient} ${
				bgImgSrc
					? 'section-wrapper bg-auto bg-left-top bg-no-repeat'
					: ''
			} col-span-full grid grid-cols-12 grid-rows-auto md:m-2`}
			style={{
				minHeight: '90vh',
				// backgroundImage: bgImgSrc ? `url(${bgImgSrc})` : '',
			}}
		>
			{bgImgSrc && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						opacity: '0.1',
						backgroundImage: `url(${bgImgSrc ? bgImgSrc : ''})`,
					}}
				/>
			)}
			{children}
		</section>
	);
};

export default SectionWrapper;
