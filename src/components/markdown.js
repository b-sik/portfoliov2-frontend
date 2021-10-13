import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import parse from 'html-react-parser';
import {
	defaultBlockParse as mdParse,
	defaultReactOutput as mdOutput,
} from 'simple-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';
import Toggle from '../components/ui/toggle';

const Markdown = ({ mdString, content }) => {
	/**
	 * Markdown view state.
	 */
	const [mdView, setMdView] = useState(true);

	/**
	 * Toggle.
	 */
	const onToggleChange = () => {
		setMdView(!mdView);
	};

	return (
		<>
			<div
				id="markdown"
				className={`col-start-2 col-end-12 md:col-start-4 md:col-end-10 row-start-2 row-end-3 self-center ${
					mdView ? 'prose' : ''
				}`}
			>
				{mdView ? parse(content) : mdOutput(mdParse(mdString))}
			</div>
			<ReactTooltip
				type={'light'}
				delayShow={500}
				place={'left'}
				id={'tooltip-markdown'}
			/>
			<Toggle
				wrapperClassNames="row-start-3 row-end-4 col-start-10 col-end-12 sm:col-start-9 sm:col-end-10 opacity-70 h-auto justify-self-end py-4"
				label={
					<FontAwesomeIcon
						icon={faMarkdown}
						className="dark:text-gray-200 cursor-pointer"
					/>
				}
				onChange={onToggleChange}
				checked={mdView}
				dataTip={__('Toggle markdown view on/off', 'bszyk-portfolio')}
			/>
		</>
	);
};

export default Markdown;
