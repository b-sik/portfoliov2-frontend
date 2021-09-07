import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';

import Nav from '../components/nav';
import Seo from '../components/seo';

const About = ({
	data: {
		allWpPage: { edges },
	},
}) => {
    const {
		node: { content },
	} = edges[0];
	return (
		<div>
			<Nav location='/about'/>
			<Seo title="About" />
            {parse(content)}
		</div>
	);
};

export default About;

export const pageQuery = graphql`
	{
		allWpPage(filter: { databaseId: { eq: 27 } }) {
			edges {
				node {
					content
				}
			}
		}
	}
`;
