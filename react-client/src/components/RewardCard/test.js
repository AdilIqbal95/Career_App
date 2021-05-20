import { screen } from '@testing-library/react';
import RewardCard from '.';

describe('JobbaHut', () => {
    test('it shows page header', () => {
        renderWithProviders(<RewardCard />)
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
    })
})