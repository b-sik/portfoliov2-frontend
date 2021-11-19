import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { __ } from '@wordpress/i18n';

const ContactForm = () => {
	/**
	 * Helper function.
	 * @see {@link https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/}
	 * @param {Object} data Data to be encoded.
	 */
	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					'=' +
					encodeURIComponent(data[key])
			)
			.join('&');
	};

	return (
		<Formik
			initialValues={{ name: '', email: '', subject: '', message: '' }}
			validate={(values) => {
				const errors = {};

				if (!values.name) {
					errors.name = 'Name required';
				}

				if (!values.email) {
					errors.email = 'Email required';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
						values.email
					)
				) {
					errors.email = 'Invalid email address';
				}

				if (!values.subject) {
					errors.subject = 'Subject required';
				}

				if (!values.message) {
					errors.message = 'Message required';
				}

				return errors;
			}}
			onSubmit={(values, actions) => {
				fetch('/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: encode({ 'form-name': 'contact-form', ...values }),
				})
					.then(() => {
						const submitBtn = document.getElementById(
							'contact-form-submit'
						);

						submitBtn.innerText = 'Success!';

						setTimeout(() => {
							submitBtn.innerText = 'Submit';
						}, 3000);

						actions.resetForm();
					})
					.catch(() => {
						const submitBtn = document.getElementById(
							'contact-form-submit'
						);

						submitBtn.innerText = 'Error :/';

						setTimeout(() => {
							submitBtn.innerText = 'Submit';
						}, 3000);
					})
					.finally(() => actions.setSubmitting(false));
			}}
		>
			{({ isSubmitting }) => {
				const labelClassnames = 'mt-1.5 text-sm';
				const inputClassnames =
					'border rounded-md p-1.5 mt-px bg-white dark:bg-black dark:border-indigo-500';
				const errorClassnames = 'text-xs text-red-500';

				return (
					<Form
						className="flex flex-col"
						data-netlify={true}
						data-netlify-honeypot="bot-field"
						name="contact-form"
					>
						{/* Name */}
						<label
							htmlFor="contact-form-name"
							className={labelClassnames}
						>
							{__('Name', 'bszyk-portfolio')}
						</label>
						<Field
							type="text"
							name="name"
							id="contact-form-name"
							className={inputClassnames}
						/>
						<ErrorMessage
							name="name"
							component="div"
							className={errorClassnames}
						/>

						{/* Email */}
						<label
							htmlFor="contact-form-email"
							className={labelClassnames}
						>
							{__('Email', 'bszyk-portfolio')}
						</label>
						<Field
							type="email"
							name="email"
							id="contact-form-email"
							className={inputClassnames}
						/>
						<ErrorMessage
							name="email"
							component="div"
							className={errorClassnames}
						/>

						{/* Subject */}
						<label
							htmlFor="contact-form-subject"
							className={labelClassnames}
						>
							{__('Subject', 'bszyk-portfolio')}
						</label>
						<Field
							type="text"
							name="subject"
							id="contact-form-subject"
							className={inputClassnames}
						/>
						<ErrorMessage
							name="subject"
							component="div"
							className={errorClassnames}
						/>

						{/* Message */}
						<label
							htmlFor="contact-form-message"
							className={labelClassnames}
						>
							{__('Message', 'bszyk-portfolio')}
						</label>
						<Field
							component="textarea"
							rows="4"
							name="message"
							id="contact-form-message"
							className={inputClassnames}
						/>
						<ErrorMessage
							name="message"
							component="div"
							className={errorClassnames}
						/>

						{/* Submit */}
						<button
							id="contact-form-submit"
							type="submit"
							disabled={isSubmitting}
							className="text-center p-2 mt-2 bg-gray-200 hover:bg-gray-300 text-black border rounded dark:border-indigo-500 dark:text-gray-200 dark:bg-black dark:hover:bg-gray-800"
						>
							{__('Submit', 'bszyk-portfolio')}
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default ContactForm;
