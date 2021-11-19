import { useStaticQuery, graphql } from 'gatsby';

export const useSkillsData = () => {
	const {
		allWpSkill: { edges },
	} = useStaticQuery(graphql`
		query SkillsQuery {
			allWpSkill(sort: { fields: menuOrder }) {
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
						menuOrder
					}
				}
			}
		}
	`);
	return edges;
};
