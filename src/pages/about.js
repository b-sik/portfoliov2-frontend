import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import Layout from '../components/layout';
import { useAboutPageData } from '../hooks/use-about-page-data.js';
import { getBgColor, getBgGradientClass } from '../utilities/background';

const About = ({ isExcerpt }) => {
	const { content, excerpt, featuredImage } = useAboutPageData();

	const bgImgData = getImage(featuredImage.node.localFile);
	const bgImgSrc = bgImgData.images.fallback.src;

	const bgColor = getBgColor();
	const bgGradient = getBgGradientClass(bgColor);

	return (
		<Layout location={isExcerpt ? '/' : '/about'} bgImgSrc={bgImgSrc} bgColor={bgColor}>
			<div
				id="about"
				className={`${bgGradient} opacity-90 w-full h-screen overflow-hidden flex-grow grid grid-cols-12 grid-rows-3`}
			>
				<div
					id="about--excerpt"
					className="col-start-4 col-end-10 row-start-2 row-end-3"
				>
					{isExcerpt ? parse(excerpt) : parse(content)}
				</div>
			</div>
		</Layout>
	);
};

export default About;
