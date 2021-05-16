import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from '.';

describe('Register', () => {
    beforeEach(() => {
        render(<Register />, { wrapper: MemoryRouter });
    });

    describe('register button', () => {
        test('it renders', () => {
            const button = screen.getByRole('button')
            expect(button.textContent).toContain('Register')
        })
    })
})