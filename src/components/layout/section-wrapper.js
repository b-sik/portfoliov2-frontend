import React from 'react';
import { processFeaturedImg } from '../../utilities/process-img';


const SectionWrapper = ({ id, children, featuredImage }) => {

	// const bgImgProps = 'bg-auto bg-left-top bg-no-repeat';

	return (
		<section
			id={id}
			className={`col-span-full border grid grid-cols-12 grid-rows-auto m-5`}
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
