import React from 'react';
import Layout from '../components/layout/layout';
import AboutSection from './../components/sections/about-section';
import SkillsSection from './../components/sections/skills-section';

const About = (props) => {

	return (
		<Layout {...props}>
			<AboutSection />
			<SkillsSection />
		</Layout>
	);
};

export default About;
