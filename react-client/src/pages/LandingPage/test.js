import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '.';

describe('LandingPage', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })

    test('it renders a nav tag', () => {
        renderWithProviders(<LandingPage />)
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})