import { screen } from '@testing-library/react';
import MyJobs from '.';

describe('MyJobs', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })

    test('it shows page header', () => {
        renderWithProviders(<MyJobs />)
        expect(screen.getAllByRole('heading')[0].textContent).toContain('MyJobs');
    })
})