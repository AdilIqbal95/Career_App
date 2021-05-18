import { render, screen } from '@testing-library/react';
import Profile from '.';


describe('Profile', () => {
    test('it shows a profile pic', () => {
        render(<Profile />)
        const profilePic = screen.queryByRole('img');
        expect(profilePic).toBeInTheDocument();
    })

})