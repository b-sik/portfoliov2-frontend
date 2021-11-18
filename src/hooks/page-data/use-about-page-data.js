import { useStaticQuery, graphql } from 'gatsby';

export const useAboutPageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query AboutQuery {
			allWpPage(
				filter: {
					slug: { eq: "about" }
					blocks: { elemMatch: { tagName: { eq: "pre" } } }
				}
			) {
				edges {
					node {
						id
						content
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData(width: 1440)
									}
								}
							}
						}
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
