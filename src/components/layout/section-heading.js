import React from 'react';
import parse from 'html-react-parser';

const SectionHeading = ({ title, excerpt, center }) => {
	return (
		<div
			id={`${title.toLowerCase()}-heading`}
			className={`z-10 text-center col-start-1 col-end-13 ${
				center
					? ''
					: 'md:text-left md:col-start-1 md:col-end-7 lg:col-end-4'
			} row-start-1 row-end-2 mt-8 mb-4 bg-black bg-opacity-10`}
		>
			<div
				className={`${
					center ? '' : 'md:pl-20'
				} py-4 md:pr-4 bg-black text-white bg-opacity-80`}
			>
				<h3 className="z-10">{title}</h3>
				{parse(excerpt)}
			</div>
		</div>
	);
};

export default SectionHeading;
