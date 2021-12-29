import React from 'react';
import { getImgSrc } from '../../../utilities/process-img';
import { processBlocks } from '../../../utilities/process-blocks';
import CardContainer from '../card-container';
import CardHeading from '../card-heading';
import CardDescription from '../card-description';
import CardImage from '../card-image';
import CardButtons from '../card-buttons';

const ProjectCard = ({ node }) => {
	if (!node) {
		return null;
	}

	const {
		node: { blocks, title, project, featuredImage },
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
		image: featuredImage ? getImgSrc(featuredImage) : null,
		imgAlt: featuredImage ? featuredImage.node.altText : null,
		gitHubLink: project?.github || null,
		liveDemoLink: project?.liveDemo || null,
	};

	/**
	 * Destructure processed content.
	 */
	const { description, image, imgAlt, gitHubLink, liveDemoLink } =
		processBlocks(blocks, content);

	return (
		<CardContainer type="project">
			<CardHeading title={title} center />
			<div className='flex items-center my-4'>
				<CardDescription description={description} center />
				<CardImage image={image} alt={imgAlt} />
			</div>
			<CardButtons gitHubLink={gitHubLink} liveDemoLink={liveDemoLink} center />
		</CardContainer>
	);
};

export default ProjectCard;
