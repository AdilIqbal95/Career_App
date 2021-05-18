import { screen } from '@testing-library/react';
import Login from '.';
import 'jest-localstorage-mock';

describe('Login', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })

    describe('login', () => {
        renderWithProviders(<Login />)
        test('it renders', () => {
            const loginForm = screen.getByRole('form', { name: 'login' })
            expect(loginForm).toBeInTheDocument()
        })
    })
})