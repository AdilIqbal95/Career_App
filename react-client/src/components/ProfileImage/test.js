import { screen } from '@testing-library/react';
import ProfileImage from '.';

describe('Profile', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })
    test('it shows a profile pic', () => {
        renderWithProviders(<ProfileImage />)
        const profilePic = screen.queryByRole('img');
        expect(profilePic).toBeInTheDocument();
    })

})