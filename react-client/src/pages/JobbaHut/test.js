import { screen } from '@testing-library/react';
import JobbaHut from '.';

describe('JobbaHut', () => {
    test('it shows page header', () => {
        render(<JobbaHut />)
        expect(screen.getAllByRole('heading')[0].textContent).toContain('JobbaHut');
    })
})