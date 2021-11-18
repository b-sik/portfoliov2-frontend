import React from 'react';
import parse from 'html-react-parser';
import Icons from '../icons';
import { Link } from 'gatsby';
import { __ } from '@wordpress/i18n';
import processBlocks from '../../utilities/process-blocks';

const SkillCard = ({ node }) => {
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
			skills: { iconName },
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
		icon: iconName || null,
	};

	/**
	 * Destructure processed content.
	 */
	const { description, icon } = processBlocks(blocks, content);

	return (
		<div
			className={`section-card hover:animate-hover-grow text-left mx-8 p-4 md:p-6 h-auto max-w-full bg-white dark:bg-black border dark:border-black rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl dark:hover:shadow-xl-white transition-all dark:shadow-lg-white`}
		>
			<div className="section-card-title flex w-full justify-between">
				<h4 className="mb-2">{title}</h4>
				{icon && (
					<Icons
						iconName={icon}
						classnames={`text-3xl -mt-1 -mr-1 md:-mt-2 md:-mr-2 ${
							icon === 'faReact' && 'hover:animate-spin'
						}`}
					/>
				)}
			</div>
			{description && <p className="mt-2">{parse(description)}</p>}
			<Link
				to="/projects"
				className="self-start text-left text-xs hover:underline mt-2"
			>
				{__('See projects', 'bszyk-portfolio')}&nbsp;&rarr;
			</Link>
		</div>
	);
};

export default SkillCard;
