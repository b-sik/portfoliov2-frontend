import React from 'react';
import { chunk } from 'lodash';
import SkillCard from './skill-card';
import { useSkillsData } from '../../../hooks/post-type-data/use-skills-data';
import { isMobileOnly } from 'react-device-detect';
import CardRow from '../card-row';

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
					<CardRow rowStart={rowStart} currentRow={i} key={i}>
						{nodes.map((node, j) => (
							<SkillCard key={j} node={node} rowIndex={j} />
						))}
					</CardRow>
				);
			})}
		</>
	);
};

export default SkillsCards;
