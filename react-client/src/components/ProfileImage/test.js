import { screen } from '@testing-library/react';
import { AuthProvider, useAuthContext } from '.'
import ProfileImage from '.';

import axios from 'axios';
jest.mock('axios');


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

    test('it renders image on successful api call', async () => {
        axios.get.mockResolvedValue({ data: [{ id: 1, description: 'Testing', profile_image: "https://test.com", points: 1 }] });

        renderWithProviders(<ProfileImage />);

        const img = await screen.findByRole('img');
        expect(img).toBeInTheDocument()
    })

})