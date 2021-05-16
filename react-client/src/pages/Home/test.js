import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import Home from '.';
import App from '../../App'

import '@testing-library/jest-dom/extend-expect'


test('full app rendering/navigating', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <Home />
        </Router>
    )
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(screen.getByText(/My Jobs/i)).toBeInTheDocument()

})

test('landing on a bad page', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    render(
        <Router history={history}>
            <App />
        </Router>
    )

    expect(screen.getByText(/Oops/i)).toBeInTheDocument()
})


// describe('Home', () => {
//     test('it shows page header', () => {
//         render(<Home />, { wrapper: MemoryRouter })
//         expect(screen.getByRole('heading').textContent).toContain('Welcome');
//     })
// })