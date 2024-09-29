import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { it, expect, describe, afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest';
import RegisterForm from '../../../src/features/auth/components/RegisterForm';


describe('RegisterForm', () => {

    afterEach(() => {
        cleanup();
    });

    it('renders the form correctly', () => {
        render(<RegisterForm />);

        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    });

    it('shows validation errors when submitting empty form', async () => {
        render(<RegisterForm />);

        const submitButton = screen.getAllByText(/register/i)[0];
        fireEvent.click(submitButton);

        expect(await screen.findByText(/username must be at least 2 characters/i)).toBeInTheDocument();
        expect(await screen.findByText(/full name must be at least 2 characters/i)).toBeInTheDocument();
        expect(await screen.findByText(/please enter a valid email/i)).toBeInTheDocument();
        expect(await screen.findByText(/password must be at least 8 characters/i)).toBeInTheDocument();
    });

    it('displays error when passwords do not match', async () => {
        render(<RegisterForm />);
        screen.debug();
        const passwordInput = screen.getByLabelText(/^password$/i);
        const confirmPasswordInput = screen.getByLabelText(/confirm password/i);

        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password456' } });

        const submitButton = screen.getByRole('button', { name: /register/i });
        fireEvent.click(submitButton);

        expect(await screen.findByText(/passwords do not match/i)).toBeInTheDocument();

        const allPasswordInputs = screen.getAllByLabelText(/password/i);
        console.log(allPasswordInputs.length)
    });
});