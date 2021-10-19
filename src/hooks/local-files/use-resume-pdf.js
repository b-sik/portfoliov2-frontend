import { useStaticQuery, graphql } from 'gatsby';

export const useResumePdf = () => {
	const {
		allFile: { edges },
	} = useStaticQuery(graphql`
		query ResumeQuery {
			allFile(filter: { extension: { eq: "pdf" } }) {
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
