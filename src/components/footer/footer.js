import React from 'react';
import SocialLinks from '../sections/contact-components/social-links';

const Footer = () => {
	const linkClassnames = 'text-blue-300';

	return (
		<footer className="py-2 bg-black overflow-hidden relative text-center">
			<div className="flex flex-col sm:flex-row place-content-center">
				<div id="footer-copyright-div flex place-content-center">
					<span className="text-xs sm:text-sm text-white leading-none my-auto">{`© ${new Date().getFullYear()} Brian Siklinski. `}</span>
					<br className="inline sm:hidden" />
					<span className="text-xs sm:text-sm text-white leading-none my-auto">
						Created with&nbsp;
						<a
							href="https://reactjs.org/"
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassnames}
						>
							React
						</a>
						,&nbsp;
						<a
							href="https://www.gatsbyjs.com/"
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassnames}
						>
							Gatsby
						</a>
						,&nbsp;
						<a
							href="https://wordpress.org/"
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassnames}
						>
							WordPress
						</a>
						,&nbsp;&&nbsp;
						<a
							href="https://tailwindcss.com/"
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassnames}
						>
							TailwindCSS
						</a>
						.
					</span>
					<span
						className={'text-lg text-black'}
					>
						{' '}
						|{' '}
					</span>
				</div>
				<SocialLinks iconsOnly />
			</div>
		</footer>
	);
};

export default Footer;
