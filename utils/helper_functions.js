/**
 * Validates if the given value is a valid email address.
 *
 * @param {string} value - The value to validate.
 * @returns {boolean} - Returns true if the value is a valid email address, false otherwise.
 */
export function isValidEmail(value) {
  // Regular expression pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

/**
 * Validates if the given value is a valid number.
 *
 * @param {string} value - The value to validate.
 * @returns {boolean} - Returns true if the value is a valid number, false otherwise.
 */
export function isValidNumber(value) {
  // Regular expression pattern for number validation
  const numberRegex = /^\d+$/;
  return numberRegex.test(value);
}

/**
 * Displays an error message for a specified duration of time.
 *
 * @param {string} message - The error message to be displayed.
 * @returns {undefined} - This function does not return a value.
 */
export function showErrorMessage(message, error, setError) {
  // Check if an error is already being displayed
  if (error.isHasError) {
    return;
  }

  // Set the error state to show the error message
  setError({
    isHasError: true,
    errorMessage: message,
  });

  // Clear the error message after 2 seconds
  // * notice that the error duration to be desplayed is 2 seconds in the styles and also here is 2000ms
  // 2s = 2000ms
  setTimeout(() => {
    setError({
      isHasError: false,
      errorMessage: null,
    });
  }, 2000);
}
