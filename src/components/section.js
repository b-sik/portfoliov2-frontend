import React from 'react';
import { isMobileOnly } from 'react-device-detect';
import SectionCard from './section-card';
import { chunk, shuffle } from 'lodash';

const Section = ({ section, edges, bgGradient }) => {
	if (!edges) {
		return null;
	}

	const chunked = isMobileOnly
		? shuffle(chunk(edges, 1))
		: shuffle(chunk(edges, 2));

	const rowStart = 2;

	return (
		<div
			id={`${section}-wrapper`}
			className={`${bgGradient} p-4 flex flex-wrap overflow-hidden grid grid-cols-12 auto-rows-min`}
		>
			<h2 className="col-span-full row-start-1 row-end-2 text-center my-4">
				{section[0].toUpperCase() + section.substring(1)}
			</h2>
			{chunked.map((nodes, i) => {
				return (
					<div
						key={i}
						id={`${section}-container-${i}`}
						className={`${
							isMobileOnly
								? 'col-span-full'
								: 'col-start-2 col-end-12'
						} row-start-${rowStart + i} row-end-${
							rowStart + 1 + i
						} flex items-center justify-around my-6`}
					>
						{nodes.map((node, j) => (
							<SectionCard key={`${i}-${j}`} node={node} />
						))}
					</div>
				);
			})}
		</div>
	);
};

export default Section;
