import { AxiosError } from 'axios';

/**
 * Formats an error message based on the provided error object.
 *
 * @param {unknown} errorObject - The error object to format.
 * @return {string} A formatted error message.
 */
export const formatErrorMessage = (errorObject: unknown): string => {
    let errorMessage = 'An unexpected error occurred.';

    if (errorObject instanceof AxiosError) {
        const { response } = errorObject;

        if (response) {
            const { status, data } = response;

            if (status === 500) {
                errorMessage = 'A server error occurred. Please try again later.';
            } else if (data) {
                errorMessage = Object.entries(data).reduce(
                    (message, [key, value]) =>
                        message +
                        `${key}: ${Array.isArray(value) ? value.join(', ') : value}\n`,
                    ''
                );
            }
        }
    }

    return errorMessage;
};
