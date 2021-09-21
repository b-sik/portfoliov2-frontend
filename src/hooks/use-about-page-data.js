import { useStaticQuery, graphql } from 'gatsby';

export const useAboutPageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query AboutQuery {
			allWpPage(filter: { slug: { eq: "about" } }) {
				edges {
					node {
						id
						content
						excerpt
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData
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
