import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';

import Nav from '../components/nav';
import Seo from '../components/seo';

const Projects = ({
	data: {
		allWpPage: { edges },
	},
}) => {
    const {
		node: { content },
	} = edges[0];
	return (
		<div>
			<Nav location='/projects'/>
			<Seo title="Projects" />
            {parse(content)}
		</div>
	);
};

export default Projects;

export const pageQuery = graphql`
	{
		allWpPage(filter: { databaseId: { eq: 30 } }) {
			edges {
				node {
					content
				}
			}
		}
	}
`;
