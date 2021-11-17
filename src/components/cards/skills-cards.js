import React from 'react';
import { chunk } from 'lodash';
import Card from './card';
import { useSkillsData } from '../../hooks/use-skills-data';
import { isMobileOnly } from 'react-device-detect';

const SkillsCards = () => {
	const skillsData = useSkillsData();

	/**
	 * Determines num of columns.
	 */
	const chunked = isMobileOnly ? chunk(skillsData, 1) : chunk(skillsData, 2);

	return (
		<>
			{chunked.map((nodes, i) => {
				const rowStart = 2;

				return (
					<div
						key={i}
						className={`col-span-full md:col-start-2 md:col-end-12 row-start-${
							rowStart + i
						} row-end-${
							rowStart + 1 + i
						} flex items-center justify-around my-6`}
					>
						{nodes.map((node, j) => (
							<Card key={`${i}-${j}`} node={node} />
						))}
					</div>
				);
			})}
		</>
	);
};

export default SkillsCards;
