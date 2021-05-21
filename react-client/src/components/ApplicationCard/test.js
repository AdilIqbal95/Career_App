import { screen } from '@testing-library/react';
import ApplicationCard from '.';

describe('JobbaHut', () => {
    test('it shows page header', () => {
        renderWithProviders(<ApplicationCard job={job}/>)
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
    })
})