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
						title
						projects {
							github
							liveDemo
						}
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData
									}
								}
								altText
							}
						}
						blocks {
							innerHtml
							type
						}
					}
				}
			}
		}
	`);
	return edges;
};
