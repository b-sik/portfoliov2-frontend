import { useStaticQuery, graphql } from 'gatsby';

export const useProjectsPageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query ProjectsPageQuery {
			allWpPage(filter: { slug: { eq: "projects" } }) {
				edges {
					node {
						excerpt
						title
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData(width: 1440)
									}
								}
							}
						}
					}
				}
			}
		}
	`);
	return edges[0].node;
};
