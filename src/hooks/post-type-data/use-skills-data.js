import { useStaticQuery, graphql } from 'gatsby';

export const useSkillsData = () => {
	const {
		allWpSkill: { edges },
	} = useStaticQuery(graphql`
		query SkillsQuery {
			allWpSkill {
				edges {
					node {
						blocks {
							innerHtml
							type
						}
						title
						skill {
							iconName
						}
					}
				}
			}
		}
	`);
	return edges;
};
