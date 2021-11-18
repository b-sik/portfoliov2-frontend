import React from 'react';
import Button from '../ui/button';
import { processFeaturedImg } from '../../utilities/process-img';
import { processBlocks } from '../../utilities/process-blocks';

const ProjectCard = ({ node }) => {
	if (!node) {
		return null;
	}

	const {
		node: { blocks, title, projects, featuredImage },
	} = node;

	// return if no blocks.
	if (null === blocks || 'undefined' === typeof blocks) {
		return null;
	}

	/**
	 * Content schema.
	 */
	const content = {
		description: null,
		image: featuredImage ? processFeaturedImg(featuredImage) : null,
		imgAlt: featuredImage ? featuredImage.node.altText : null,
		gitHubLink: projects?.github || null,
		liveDemoLink: projects?.liveDemo || null,
	};

	/**
	 * Destructure processed content.
	 */
	const { description, image, imgAlt, gitHubLink, liveDemoLink } =
		processBlocks(blocks, content);

	return (
		<div
			className={`section-card w-100 hover:animate-hover-grow text-left mx-8 p-4 md:p-6 h-auto bg-white dark:bg-black border dark:border-black rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl dark:hover:shadow-xl-white transition-all dark:shadow-lg-white`}
		>
			<div className="section-card-title flex w-full justify-between">
				<h4 className="mb-2">{title}</h4>
			</div>
			<p className="mt-2">{description}</p>
			<div
				className={`mt-4 border flex max-w-full rounded overflow-hidden`}
			>
				<img src={image} alt={imgAlt} />
			</div>

			<div className={`w-full flex justify-between`}>
				{gitHubLink && (
					<Button
						url={gitHubLink}
						label={'GitHub'}
						iconName={'faGithub'}
					/>
				)}
				{liveDemoLink && (
					<Button
						url={liveDemoLink}
						label={'Live Demo'}
						iconName={'faDesktop'}
					/>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
