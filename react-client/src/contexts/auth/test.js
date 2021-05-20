import { renderHook, act } from '@testing-library/react-hooks'
import { AuthProvider, useAuthContext } from '.'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Home } from '../../pages'

import 'jest-localstorage-mock';

describe('useAuthContext', () => {
    let wrapper;

    beforeEach(() => {
        jest.resetAllMocks()
        wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
    })

    test('retrieves the token from local storage', async () => {
        renderHook(() => useAuthContext(), { wrapper })
        expect(localStorage.getItem).toHaveBeenCalledWith('token')
    })

    test('logout should clear localStorage', async () => {
        const history = createMemoryHistory()
        renderWithProviders(
            <Router history={history}>
                <Home />
            </Router>
        )
        const { result } = renderHook(() => useAuthContext(), { wrapper })
        act(() => result.current.logout())
        expect(localStorage.clear).toHaveBeenCalled();
    })
})