import parse from 'html-react-parser';


const processBlocks = (blocks, contentSchema) => {
    blocks.forEach((block) => {
		const { type, innerHtml } = block;

		if ('CORE_PARAGRAPH' === type) {
			Object.assign(contentSchema, { description: parse(innerHtml) });
		}
	});

    return contentSchema;
}

export default processBlocks;