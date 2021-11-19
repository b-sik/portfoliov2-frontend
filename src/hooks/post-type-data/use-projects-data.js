import { useStaticQuery, graphql } from 'gatsby';

export const useProjectsData = () => {
	const {
		allWpProject: { edges },
	} = useStaticQuery(graphql`
		query ProjectsQuery {
			allWpProject(sort: { fields: menuOrder }) {
				totalCount
				edges {
					node {
						title
						project {
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
