import parse from 'html-react-parser';

/**
 * Process blocks data.
 * @param {Array<Object>} blocks 
 * @param {Object} contentSchema 
 * @returns {Object} Updated content object
 */
export const processBlocks = (blocks, contentSchema) => {
    blocks.forEach((block) => {
		const { type, innerHtml } = block;

		if ('CORE_PARAGRAPH' === type) {
			Object.assign(contentSchema, { description: parse(innerHtml) });
		}
	});

    return contentSchema;
}