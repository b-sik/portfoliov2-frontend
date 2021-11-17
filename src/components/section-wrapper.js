import React from 'react';
import { processFeaturedImg } from '../utilities/process-img';


const SectionWrapper = ({ id, children, featuredImage }) => {
	/**
	 * Gradient.
	 */
	const bgGradient =
		'bg-gradient-to-r from-indigo-300 to-white dark:from-indigo-500 dark:to-black';

	// const bgImgProps = 'bg-auto bg-left-top bg-no-repeat';

	return (
		<section
			id="about"
			className={`${bgGradient} grid grid-cols-12 grid-rows-auto p-5`}
			style={{
				minHeight: '90vh',
				// backgroundImage: bgImgSrc ? `url(${bgImgSrc})` : '',
			}}
		>
			{children}
		</section>
	);
};

export default SectionWrapper;
