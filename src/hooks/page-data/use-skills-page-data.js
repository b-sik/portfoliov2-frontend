import { useStaticQuery, graphql } from 'gatsby';

export const useSkillsPageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query SkillsPageQuery {
			allWpPage(filter: { slug: { eq: "skills" } }) {
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
