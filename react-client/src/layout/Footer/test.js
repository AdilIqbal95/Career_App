import { screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    test('it shows the copyright logo and JobbaHunt name', () => {
        render(<Footer />);
        const content = screen.queryByText(/© JobbaHunt/i);
        expect(content).toBeInTheDocument();
    })
})