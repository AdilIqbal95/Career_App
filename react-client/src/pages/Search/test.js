import { screen } from '@testing-library/react';
import Search from '.';

describe('Search', () => {
    test('it shows page header', () => {
        render(<Search />)
        expect(screen.getAllByRole('heading')[0].textContent).toContain('Results');
    })
})