
/**
 * Function to delay a function call by some wait time.
 * 
 * @param {function} func - The function that needs to be called.
 * @param {Number} wait - The wait time for function call.
 * @param {Boolean} immediate - Flag to determine if function needs to be called immediately.
 * @returns {Function} curried function, which takes in the arguments of the function supplied.
 */
let debounce = (func, wait, immediate) => {
	// Capture the timeout in closure such that whenever the
	// inner function gets called it has access to the last setTimeout value.
	var timeout;
	return function() {
		var context = this, args = arguments;
		// call the function inside later method
		var later = function() {
			timeout = null;
			// if immediate flag is not true,
			// then call the function with proper context and arguments.
			if (!immediate) func.apply(context, args);
		};
		// set the callNow flag true if immediate flag is set and no timeout is present.
		var callNow = immediate && !timeout;
		// Always clear the timeout for upcoming function call
		clearTimeout(timeout);
		// update the new timeout
		timeout = setTimeout(later, wait);
		// if callNow flag is set then,
		// call the function with proper context and argument.
		if (callNow) func.apply(context, args);
	};
};

export default debounce;
