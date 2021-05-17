import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '.';
import 'jest-localstorage-mock';

describe('LandingPage', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })
    // beforeEach(() => {
    //     render(<LandingPage />, { wrapper: MemoryRouter });
    // });

    test('it renders a nav tag', () => {
        renderWithProviders(<LandingPage />)
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})