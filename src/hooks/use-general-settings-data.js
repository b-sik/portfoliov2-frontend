import { useStaticQuery, graphql } from 'gatsby';

export const useGeneralSettingsData = () => {
	const {
		allWp: { edges },
	} = useStaticQuery(graphql`
		query GeneralSettingsQuery {
			allWp {
				edges {
					node {
						generalSettings {
							title
							description
						}
					}
				}
			}
		}
	`);
	return edges[0].node.generalSettings;
};
