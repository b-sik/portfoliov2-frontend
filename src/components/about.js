import React from 'react';
import { getImage } from 'gatsby-plugin-image';
// import { __ } from '@wordpress/i18n';
// import { isMobileOnly } from 'react-device-detect';
import parse from 'html-react-parser';
import Layout from '../components/layout';
import { useAboutPageData } from '../hooks/use-about-page-data.js';

const About = ({ isExcerpt }) => {
	const { excerpt, featuredImage } = useAboutPageData();

	const bgImgData = getImage(featuredImage.node.localFile);
	const bgImgSrc = bgImgData.images.fallback.src;

	return isExcerpt ? (
		<div
			id="about"
			className="bg-white opacity-90 w-full overflow-hidden flex-grow grid grid-cols-12 grid-rows-3"
		>
			<div
				id="about--excerpt"
				className="col-start-4 col-end-10 row-start-2 row-end-3"
			>
				{parse(excerpt)}
			</div>
		</div>
	) : (
		<Layout location="/about" bgImgSrc={bgImgSrc}>
			<div
				id="about"
				className="bg-white opacity-90 w-full overflow-hidden flex-grow grid grid-cols-12 grid-rows-3"
			>
				<div
					id="about--excerpt"
					className="col-start-4 col-end-10 row-start-2 row-end-3"
				>
					{parse(excerpt)}
				</div>
			</div>
		</Layout>
	);
};

export default About;
