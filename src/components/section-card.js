import React from 'react';
import parse from 'html-react-parser';
import Icons from './icons';
import Button from './ui/button';
import { Link } from 'gatsby';
import { __ } from '@wordpress/i18n';

const SectionCard = ({ node }) => {
	const {
		node: { blocks, title, projects, skills },
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
		code: null,
		images: [],
		icon: skills?.iconName || null,
		gitHubLink: projects?.github || null,
		liveDemoLink: projects?.liveDemo || null,
		isSkill: skills?.isSkill || false,
	};

	/**
	 * Process individual blocks and add to content object.
	 */
	blocks.forEach((block) => {
		const { type, innerHtml } = block;

		switch (type) {
			case 'CORE_PARAGRAPH':
				Object.assign(content, { description: innerHtml });
				break;
			case 'CORE_CODE':
				Object.assign(content, { code: parse(innerHtml) });
				break;
			case 'CORE_IMAGE':
				Object.assign(content, {
					images: [...content.images, parse(innerHtml)],
				});
				break;
			default:
				break;
		}
	});

	/**
	 * Destructure processed content.
	 */
	const {
		description,
		images,
		icon,
		gitHubLink,
		liveDemoLink,
		isSkill,
	} = content;

	return (
		<div
			className={`section-card ${
				projects ? 'w-3/4 md:w-1/2' : ''
			} hover:animate-hover-grow text-left inline-block mx-8 p-4 md:p-6 h-auto max-w-full bg-white dark:bg-black border dark:border-black rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl dark:hover:shadow-xl-white transition-all dark:shadow-lg-white`}
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
			{images.length > 0 &&
				images.map((image, i) => (
					<div
						key={i}
						className={`mt-4 border flex max-w-full rounded overflow-hidden`}
					>
						{image}
					</div>
				))}
			{isSkill && (
				<Link
					to="/projects"
					className="self-start text-left text-xs hover:underline mt-2"
				>
					{__('See projects', 'bszyk-portfolio')}&nbsp;&rarr;
				</Link>
			)}
			{projects && (
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
			)}
		</div>
	);
};

export default SectionCard;
