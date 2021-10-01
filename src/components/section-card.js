import React from 'react';
import parse from 'html-react-parser';
import Icons from './icons';
// import { __ } from '@wordpress/i18n';

const SectionCard = ({ node }) => {
	const {
		node: {
			blocks,
			title,
			iconName: { skillIconName },
		},
	} = node;

	if (null === blocks || 'undefined' === typeof blocks) {
		return null;
	}

	const content = {
		description: null,
		code: null,
		image: null,
		iconName: skillIconName || null,
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

	const { description, code, image, iconName } = content;

	return (
		<div className="text-left opacity-85 inline-block mx-8 p-2 md:p-6 h-auto w-auto bg-white dark:bg-black border dark:border-black rounded-2xl flex flex-col items-center justify-center shadow-lg dark:shadow-lg-white">
			<div
				id="section-card-title-and-icon"
				className="flex w-full justify-between"
			>
				<h4 className="">{title}</h4>
				{iconName && (
					<Icons
						iconName={iconName}
						classnames={'text-3xl -mt-2 -mr-2'}
					/>
				)}
			</div>
			{description && <p className="mt-2">{description}</p>}
			{code && <div className="overflow-scroll h-60 w-auto">{code}</div>}
			{image && image}
		</div>
	);
};

export default SectionCard;
