import React from 'react';
import parse from 'html-react-parser';
// import { __ } from '@wordpress/i18n';

const SectionCard = ({ node }) => {
	const {
		node: { blocks, title },
	} = node;

	if (null === blocks || 'undefined' === typeof blocks) {
		return null;
	}

	const content = {
		description: null,
		code: null,
		image: null,
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

	const { description, code, image } = content;

	return (
		<div className="dark:opacity-50 inline-block mx-8 p-8 h-auto w-auto bg-white dark:bg-black opacity-90 border dark:border-black rounded-2xl flex flex-col items-center justify-center shadow-lg dark:shadow-lg-white">
			<h3 className="my-4">{title}</h3>
			{description && <p className="m-4">{description}</p>}
			{code && (
				<div className="overflow-scroll h-60 w-auto">
					{code}
				</div>
			)}
			{image && image}
		</div>
	);
};

export default SectionCard;
