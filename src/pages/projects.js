import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import { useProjectsData } from '../hooks/use-projects-data.js';
import { getBgGradientClass } from '../utilities/background';

const Projects = () => {
	/**
	 * Bg color state.
	 */
	const bgColor = 'indigo';

	/**
	 * Bg gradient state.
	 */
	const [bgGradient, setBgGradient] = useState(null);

	/**
	 * Set bg color.
	 */
	// useEffect(() => {
	// 	setBgColor(getBgColor());
	// }, []);

	/**
	 * Set gradient class.
	 */
	useEffect(() => {
		setBgGradient(getBgGradientClass(bgColor, 'b'));
	}, [bgColor]);

	return (
		<Layout location="/projects" bgColor={bgColor}>
			<Section
				section="projects"
				edges={useProjectsData()}
				bgGradient={bgGradient}
			/>
		</Layout>
	);
};

export default Projects;
