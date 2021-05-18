import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '.';

describe('Header', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })
    test('it renders a nav tag', () => {
        renderWithProviders(<Header />);
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})