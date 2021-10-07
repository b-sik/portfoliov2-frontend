import React from 'react';
import parse from 'html-react-parser';
import Icons from './icons';
// import { __ } from '@wordpress/i18n';

const SectionCard = ({ node }) => {
	const {
		node: { blocks, title, iconName, projects },
	} = node;

	if (null === blocks || 'undefined' === typeof blocks) {
		return null;
	}

	const content = {
		description: null,
		code: null,
		image: null,
		icon: iconName ? iconName.skillIconName : null,
		gitHubLink: projects ? projects.github : null,
		liveDemoLink: projects ? projects.liveDemo : null,
	};

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
				Object.assign(content, { image: parse(innerHtml) });
				break;
			default:
				break;
		}
	});

	const {
		description,
		image,
		icon,
		gitHubLink,
		liveDemoLink,
	} = content;

	return (
		<div className="section-card hover:animate-hover-grow text-left opacity-85 inline-block mx-8 p-2 md:p-6 h-auto w-auto bg-white dark:bg-black border dark:border-black rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl dark:hover:shadow-xl-white transition-all dark:shadow-lg-white">
			<div className="section-card-title flex w-full justify-between">
				<h4 className="mb-2">{title}</h4>
				{icon && (
					<Icons
						iconName={icon}
						classnames={`text-3xl -mt-2 -mr-2 ${
							icon === 'faReact' && 'hover:animate-spin'
						}`}
					/>
				)}
			</div>
			{description && <p className="mt-2">{description}</p>}
			{image && <div className={`mt-4 border`}>{image}</div>}
			{projects && (
				<div className={`w-full flex justify-between`}>
					{gitHubLink && (
						<a
							href={gitHubLink}
							className={`p-4 mt-4 bg-gray-200 hover:bg-gray-300 text-black rounded`}
							target="_blank"
							rel="noopener noreferrer"
						>
							Github <Icons iconName="faGithub" />
						</a>
					)}
					{liveDemoLink && (
						<a
							href={liveDemoLink}
							className={`p-4 mt-4 bg-gray-200 hover:bg-gray-300 text-black rounded`}
							target="_blank"
							rel="noopener noreferrer"
						>
							Live Demo <Icons iconName="faDesktop" />
						</a>
					)}
				</div>
			)}
		</div>
	);
};

export default SectionCard;
