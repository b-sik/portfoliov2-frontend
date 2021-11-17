import React from 'react';
import { isMobileOnly } from 'react-device-detect';
import SectionCard from './card';
import { chunk } from 'lodash';

const Section = ({ section, description, edges }) => {
	if (!edges) {
		return null;
	}

	/**
	 * Determines num of columns.
	 */
	const chunked = isMobileOnly ? chunk(edges, 1) : chunk(edges, 2);

	/**
	 * Gradient.
	 */
	const bgGradient =
		'bg-gradient-to-b from-indigo-300 to-white dark:from-indigo-500 dark:to-black';

	return (
		<div
			id={`${section}-wrapper`}
			className={`${bgGradient} py-8 overflow-hidden grid grid-cols-12 auto-rows-min`}
		>
			<div className="col-start-2 col-end-13 row-start-1 row-end-2 my-4">
				<h3>{section[0].toUpperCase() + section.substring(1)}</h3>
				<p>{description}</p>
			</div>
			{chunked.map((nodes, i) => {
				const rowStart = 2;

				return (
					<div
						key={i}
						id={`${section}-container-${i}`}
						className={`col-span-full md:col-start-2 md:col-end-12 row-start-${
							rowStart + i
						} row-end-${
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
