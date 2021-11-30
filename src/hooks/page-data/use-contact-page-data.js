import { useStaticQuery, graphql } from 'gatsby';

export const useContactPageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query ContactPageQuery {
			allWpPage(filter: { slug: { eq: "contact" } }) {
				edges {
					node {
						socialLinks {
							email {
								url
								icon
								name
							}
							github {
								icon
								name
								url
							}
							linkedin {
								icon
								name
								url
							}
							twitter {
								icon
								name
								url
							}
						}
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
