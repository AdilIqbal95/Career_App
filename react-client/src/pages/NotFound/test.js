import NotFound from '.';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('NotFound', () => {
    test('it renders', () => {
        render(<NotFound />, { wrapper: MemoryRouter })
        const message = screen.getByText(/Oops/)
        expect(message).toBeInTheDocument()
    })
})