import React from 'react';
import Button from '../ui/button';

const FooterNav = ({ pathname }) => {
	return pathname !== '/contact' ? (
		<div className="flex w-full place-items-stretch">
			{pathname === '/' || pathname === '/home' ? (
				<>
					<Button url={'/projects'} label={'Projects'} link grow />
					<Button url={'/contact'} label={'Contact'} link grow />
				</>
			) : null}
			{pathname === '/projects' && (
				<>
					<Button url={'/home'} label={'Home'} link grow />
					<Button url={'/contact'} label={'Contact'} link grow />
				</>
			)}
		</div>
	) : null;
};

export default FooterNav;
