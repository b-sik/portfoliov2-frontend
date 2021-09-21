import { useStaticQuery, graphql } from 'gatsby';

export const useContactPageData = () => {
	const {
		allWpPage: { edges },
	} = useStaticQuery(graphql`
		query ContactPageQuery {
			allWpPage(filter: { slug: { eq: "contact" } }) {
				edges {
					node {
						id
						content
					}
				}
			}
		}
	`);
	return edges[0].node;
};
