import { screen } from '@testing-library/react';
import Profile from '.';

const TestComp = () => <h1>Just Testing</h1>

describe('Profile', () => {
    describe('LoggedOutRoute', () => {
        test('it renders the route if no-one has logged in', () => {
            renderWithProviders(<Profile component={TestComp} />)
            const publicHeading = screen.getByText("Just Testing")
            expect(publicHeading).toBeInTheDocument()
        })
    })

    describe('PrivateRoute', () => {
        test('it does not render the route if no-one has logged in', () => {
            renderWithProviders(<Profile component={TestComp} />)
            const privateHeading = screen.queryByText("Just Testing")
            expect(privateHeading).not.toBeInTheDocument()
        })
    })
})