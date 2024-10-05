import { AxiosError } from 'axios';

/**
 * Formats an error message based on the provided error object.
 *
 * @param {unknown} error - The error object to format.
 * @return {string} A formatted error message.
 */
export const formatErrorMessage = (error: unknown): string => {
    let errorMessage = "An unexpected error occurred.";

    if (error instanceof AxiosError) {
        if (error.response) {
            if (error.response.status === 500) {
                errorMessage = "A server error occurred. Please try again later.";
            } else if (error.response.data) {
                const backendErrors = error.response.data;
                errorMessage = "";

                for (const key in backendErrors) {
                    if (Object.prototype.hasOwnProperty.call(backendErrors, key)) {
                        const fieldErrors = backendErrors[key];
                        if (Array.isArray(fieldErrors)) {
                            errorMessage += `${key}: ${fieldErrors.join(", ")}\n`;
                        } else {
                            errorMessage += `${key}: ${fieldErrors}\n`;
                        }
                    }
                }
            }
        }
    }

    return errorMessage;
};