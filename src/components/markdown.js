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

const Markdown = ({ mdString, content, wrapperClasses }) => {
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
				className={wrapperClasses}
			>
				{mdView ? mdOutput(mdParse(mdString)) : parse(content)}
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
						className="dark:text-white cursor-pointer"
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
