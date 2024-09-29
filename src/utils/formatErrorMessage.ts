import { AxiosError } from 'axios';

export const formatErrorMessage = (error: unknown): string => {
    let errorMessage = "An unexpected error occurred.";

    if (error instanceof AxiosError) {
        if (error.response && error.response.data) {
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
    } else {
        errorMessage = "An unexpected error occurred."
    }

    return errorMessage;
};