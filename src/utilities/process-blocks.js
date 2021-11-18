const processBlocks = (blocks, contentSchema) => {
    blocks.forEach((block) => {
		const { type, innerHtml } = block;

		if ('CORE_PARAGRAPH' === type) {
			Object.assign(contentSchema, { description: innerHtml });
		}
	});

    return contentSchema;
}

export default processBlocks;