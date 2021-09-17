import { useStaticQuery, graphql } from 'gatsby';

export const useSkillsData = () => {
	const {
		allWpSkill: { edges },
	} = useStaticQuery(graphql`
		query SkillsQuery {
			allWpSkill {
				totalCount
				edges {
					node {
						blocks {
							innerHtml
							type
						}
						title
					}
				}
			}
		}
	`);
	return edges;
};
