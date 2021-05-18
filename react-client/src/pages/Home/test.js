import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import Home from '.';
import App from '../../App'

import '@testing-library/jest-dom/extend-expect'

describe('Header', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })

    test('full app rendering/navigating', () => {
        const history = createMemoryHistory()
        renderWithProviders(
            <Router history={history}>
                <Home />
            </Router>
        )
        // verify page content for expected route
        // often you'd use a data-testid or role query, but this is also possible
        expect(screen.getByText(/log in/i)).toBeInTheDocument()

    })

    test('landing on a bad page', () => {
        const history = createMemoryHistory()
        history.push('/some/bad/route')
        renderWithProviders(
            <Router history={history}>
                <App />
            </Router>
        )

        expect(screen.getByText(/Oops/i)).toBeInTheDocument()
    })
})