import React from 'react';
import CardContainer from '../card-container';
import CardHeading from '../card-heading';
import { processBlocks } from '../../../utilities/process-blocks';
import CardDescription from '../card-description';

const SkillCard = ({ node, rowIndex }) => {
	if (!node) {
		return null;
	}

	/**
	 * Destructure node.
	 */
	const {
		node: {
			blocks,
			title,
			skill,
		},
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
		icon: skill?.iconName || null,
	};

	/**
	 * Destructure processed content.
	 */
	const { description, icon } = processBlocks(blocks, content);

	return (
		<CardContainer rowIndex={rowIndex} type='skill'>
			<CardHeading title={title} icon={icon} />
			<CardDescription description={description} />
		</CardContainer>
	);
};

export default SkillCard;
