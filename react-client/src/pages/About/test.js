import { screen } from '@testing-library/react';
import About from '.';

describe('About', () => {
    test('it shows page header', () => {
        render(<About />)
        expect(screen.getAllByRole('heading')[0].textContent).toBe('About');
    })
})