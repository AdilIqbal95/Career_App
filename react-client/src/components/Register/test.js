import { screen } from '@testing-library/react';
import Register from '.';
import 'jest-localstorage-mock';

describe('Register', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })


    describe('register button', () => {
        test('it renders', () => {
            renderWithProviders(<Register />)
            const button = screen.getByRole('button')
            expect(button.textContent).toContain('Register')
        })
    })
})