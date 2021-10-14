import { useStaticQuery, graphql } from 'gatsby';

export const useProjectsPageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query ProjectsPageQuery {
			allWpPage(filter: { slug: { eq: "projects" } }) {
				edges {
					node {
						blocks {
							innerHtml
						}
					}
				}
			}
		}
	`);
	return edges[0].node;
};