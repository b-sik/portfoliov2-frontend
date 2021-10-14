import React from 'react';
import Button from './ui/button';

const FooterNav = ({ location }) => {
	return location !== '/contact' ? (
		<div className="flex w-full place-items-stretch">
			{location === '/' || location === '/about' ? (
				<>
					<Button url={'/projects'} label={'Projects'} link grow />
					<Button url={'/contact'} label={'Contact'} link grow />
				</>
			) : null}
			{location === '/projects' && (
				<>
					<Button url={'/about'} label={'About'} link grow />
					<Button url={'/contact'} label={'Contact'} link grow />
				</>
			)}
		</div>
	) : null;
};

export default FooterNav;
