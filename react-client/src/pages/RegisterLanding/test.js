import { screen } from '@testing-library/react';
import RegisterLanding from '.';

describe('LandingPage', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })

    test('it renders a nav tag', () => {
        renderWithProviders(<RegisterLanding />);
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})