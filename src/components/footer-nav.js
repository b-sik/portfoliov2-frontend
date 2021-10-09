import React from 'react';
import Button from './ui/button';

const FooterNav = ({ location }) => {
	return location !== '/contact' ? (
		<div className="flex w-full place-items-stretch">
			{location === '/' || location === '/about' ? (
				<>
					<Button url={'/projects'} label={'Projects'} link />
					<Button url={'/contact'} label={'Contact'} link />
				</>
			) : null}
			{location === '/projects' && (
				<>
					<Button url={'/about'} label={'About'} link />
					<Button url={'/contact'} label={'Contact'} link />
				</>
			)}
		</div>
	) : null;
};

export default FooterNav;
