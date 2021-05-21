import { screen } from '@testing-library/react';
import FinalReward from '.';

describe('JobbaHut', () => {
    test('it shows page header', () => {
        renderWithProviders(<FinalReward reward={reward} />)
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
    })
})