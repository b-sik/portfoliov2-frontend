import { useStaticQuery, graphql } from 'gatsby';

export const useHomePageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query HomeQuery {
			allWpPage(
				filter: {
					slug: { eq: "home" }
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
										gatsbyImageData(
											width: 1440
										)
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
