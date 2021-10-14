import { useStaticQuery, graphql } from 'gatsby';

export const useGeneralSettingsData = () => {
	const { allWp, allWpUser } = useStaticQuery(graphql`
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
			allWpUser {
				edges {
					node {
						lastName
						firstName
					}
				}
			}
		}
	`);

	const { generalSettings } = allWp.edges[0].node;
	const { lastName, firstName } = allWpUser.edges[0].node;

	return Object.assign(generalSettings, {
		creatorFullName: `${firstName} ${lastName}`,
	});
};
