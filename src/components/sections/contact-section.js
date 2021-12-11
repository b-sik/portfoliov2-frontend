import React from 'react';
import { __ } from '@wordpress/i18n';
import SectionWrapper from '../layout/section-wrapper';
import SectionHeading from '../layout/section-heading';
import ContactForm from './contact-components/contact-form';
import SocialLinks from './contact-components/social-links';
import Button from '../ui/button';
import { useContactPageData } from '../../hooks/page-data/use-contact-page-data';
import { useResumePdf } from '../../hooks/local-files/use-resume-pdf';
import { getImgSrc } from '../../utilities/process-img';

const ContactSection = () => {
	const { title, excerpt, featuredImage } = useContactPageData();
	const resumeUrl = useResumePdf();

	return (
		<SectionWrapper
			id="contact"
			bgImgSrc={getImgSrc(featuredImage)}
		>
			<SectionHeading title={title} excerpt={excerpt} center />
			<div className="z-10 col-start-2 col-end-12 row-start-2 row-end-3 col-span-full md:col-start-3 md:col-end-6 w-full">
				<ContactForm />
			</div>
			<SocialLinks />
			<div className="row-start-4 row-end-5 md:h-10" />
			<div className="z-10 row-start-5 row-end-6 col-span-full text-center my-6 md:mt-0">
				<Button
					url={resumeUrl}
					label={__('View Resume', 'bszyk-portfolio')}
					classnames="py-2"
					iconName="faFileAlt"
				/>
			</div>
		</SectionWrapper>
	);
};

export default ContactSection;
