	/**
	 * Handle key down.
	 * @param {object} e Event.
	 * @param {function} cb Callback.
	 */
	export const handleKeyDown = (e, cb) => {
		const { key, code, keyCode } = e;

		if (typeof key !== 'undefined' && key === 'Enter') {
			cb();
		} else if (typeof code !== 'undefined' && code === 'Enter') {
			cb();
		} else if (typeof keyCode !== 'undefined' && keyCode === 13) {
			cb();
		}
	};