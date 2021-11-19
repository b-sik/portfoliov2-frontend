import React from 'react';
import { __ } from '@wordpress/i18n';
import SectionWrapper from '../layout/section-wrapper';
import Markdown from '../markdown';
import Button from '../ui/button';
import { useHomePageData } from '../../hooks/page-data/use-home-page-data';

const HomeSection = () => {
	const { content, featuredImage, blocks } = useHomePageData();
	const mdString = blocks[0].innerHtml;

	return (
		<SectionWrapper id="home-wrapper" featuredImage={featuredImage}>
			<Markdown mdString={mdString} content={content} />
			<div className="row-start-3 row-end-4 col-span-full text-center self-end flex flex-col place-items-center">
				<Button
					url="/home#skills-wrapper"
					label={__('learn more', 'bszyk-portfolio')}
					classnames="py-1 flex flex-row place-items-center border-indigo-500 bg-indigo-200 hover:bg-indigo-300 hover:animate-hover-grow transition-all"
					link
					iconName="faAngleDown"
					iconClassnames="animate-bounce"
				/>
			</div>
			{/* Dummy row to even out the layout */}
			<div className="row-start-4 row-end-5" />
		</SectionWrapper>
	);
};

export default HomeSection;
