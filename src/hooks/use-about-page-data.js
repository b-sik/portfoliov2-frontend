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
					}
				}
			}
		}
	`);
	return edges[0].node;
};
