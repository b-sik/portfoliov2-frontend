import React from 'react';
import Layout from '../components/layout/layout';
import HomeSection from './../components/sections/home-section';
import SkillsSection from './../components/sections/skills-section';
import ProjectsSection from './../components/sections/projects-section';
import ContactSection from './../components/sections/contact-section';

const Home = (props) => {
	return (
		<Layout {...props}>
			<HomeSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</Layout>
	);
};

export default Home;
