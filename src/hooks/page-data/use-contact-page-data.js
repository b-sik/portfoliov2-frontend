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
					}
				}
			}
		}
	`);
	return edges[0].node;
};
