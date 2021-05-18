import { screen } from '@testing-library/react';
import About from '.';

describe('About', () => {
    test('it shows page header', () => {
        render(<About />)
        expect(screen.getByRole('heading').textContent).toBe('About');
    })
})