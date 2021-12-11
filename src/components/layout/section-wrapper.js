import React, { useEffect, useState } from 'react';

const SectionWrapper = ({
	id,
	children,
	bgImgSrc = false,
	bgImgPos = 'bg-left-top',
}) => {
	const [bgCss, setBgCss] = useState('bg-white');

	useEffect(() => {
		switch (id) {
			case 'home-wrapper':
				setBgCss('bg-green-100');
				break;
			case 'skills-wrapper':
				setBgCss('bg-yellow-200');
				break;
			case 'projects-wrapper':
				setBgCss('bg-red-400');
				break;
			case 'contact-wrapper':
				setBgCss('bg-indigo-400');
				break;
			default:
				break;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section
			id={id}
			className={`relative ${bgCss} ${
				bgImgSrc
					? `section-wrapper bg-auto ${bgImgPos} bg-no-repeat`
					: ''
			} col-span-full grid grid-cols-12 grid-rows-auto md:m-0.5 rounded`}
			style={{ minHeight: '90vh' }}
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
