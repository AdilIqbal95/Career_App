import { screen } from '@testing-library/react';
import EditProfile from '.';

describe('EditProfile', () => {
    test('it shows page header', () => {
        renderWithProviders(<EditProfile />)
        expect(screen.getByRole('heading').textContent).toContain('Edit Your Profile');
    })
})