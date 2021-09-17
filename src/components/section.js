import React from 'react';
// import { __ } from '@wordpress/i18n';
import { isMobileOnly } from 'react-device-detect';

import SectionCard from './section-card';

const chunk = require(`lodash/chunk`);

const Section = ({ section, edges }) => {
	if (!edges) {
		return null;
	}

	const chunked = isMobileOnly ? chunk(edges, 1) : chunk(edges, 2);
	const rowStart = 2;

	return (
		<div
			id={`${section}-wrapper`}
			className="p-4 bg-gradient-to-b from-white to-indigo-100 flex flex-wrap overflow-hidden  grid grid-cols-12 auto-rows-min"
		>
			<h2 className="col-span-full row-start-1 row-end-2 text-center">
				Projects
			</h2>
			{chunked.map((nodes, i) => {
				return (
					<div
						key={i}
						id={`${section}-container-${i}`}
						className={`col-start-2 col-end-12 row-start-${
							rowStart + i
						} row-end-${
							rowStart + 1 + i
						} flex justify-around my-10`}
					>
						{nodes.map((node, j) => (
							<SectionCard node={node} />
						))}
					</div>
				);
			})}
		</div>
	);
};

export default Section;
