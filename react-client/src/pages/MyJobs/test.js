import { screen } from '@testing-library/react';
import MyJobs from '.';

describe('MyJobs', () => {
    test('it shows page header', () => {
        render(<MyJobs />)
        expect(screen.getByRole('heading').textContent).toContain('MyJobs');
    })
})