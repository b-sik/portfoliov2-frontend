import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/section-wrapper';

const NotFoundPage = (props) => {
	return (
		<Layout {...props}>
			<SectionWrapper>
				<div className="col-span-full text-center m-auto">
					<h1>404: Not Found</h1>
					<p>
						You just hit a route that doesn&#39;t exist... the
						sadness.
					</p>
				</div>
			</SectionWrapper>
		</Layout>
	);
};

export default NotFoundPage;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
