import { useStaticQuery, graphql } from 'gatsby';

export const useProjectsData = () => {
	const {
		allWpProject: { edges },
	} = useStaticQuery(graphql`
		query ProjectsQuery {
			allWpProject {
				totalCount
				edges {
					node {
						blocks {
							innerHtml
							type
						}
						title
						projects {
							github
							liveDemo
						}
					}
				}
			}
		}
	`);
	return edges;
};
