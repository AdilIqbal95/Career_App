import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '.';

describe('LandingPage', () => {
    beforeEach(() => {
        render(<LandingPage />, { wrapper: MemoryRouter });
    });

    test('it renders a nav tag', () => {
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })

    describe('login', () => {
        test('it renders', () => {
            const loginForm = screen.getByRole('form', { name: 'login' })
            expect(loginForm).toBeInTheDocument()
        })
    })

})