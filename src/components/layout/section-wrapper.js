import React from 'react';

const SectionWrapper = ({ id, children }) => {
	return (
		<section
			id={id}
			className={`col-span-full border grid grid-cols-12 grid-rows-auto md:m-5`}
			style={{
				minHeight: '90vh',
			}}
		>
			{children}
		</section>
	);
};

export default SectionWrapper;
