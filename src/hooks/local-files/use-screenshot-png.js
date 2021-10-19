import { useStaticQuery, graphql } from 'gatsby';

export const useScreenshotPng = () => {
	const {
		allFile: { edges },
	} = useStaticQuery(graphql`
		query PortfolioScreenshotQuery {
			allFile(filter: { name: { eq: "portfolio-screenshot" } }) {
				edges {
					node {
						publicURL
					}
				}
			}
		}
	`);
	return edges[0].node.publicURL;
};
