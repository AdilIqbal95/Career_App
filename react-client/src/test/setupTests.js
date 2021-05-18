import React from 'react';
import { AuthProvider } from '../contexts/auth'
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const UnAuthedProviders = ({ children }) => {
    return (
      <MemoryRouter>
          <AuthProvider>
                  {children}
          </AuthProvider>
      </MemoryRouter>
    )
  }

const renderWithProviders = (ui, options) => render(ui, { wrapper: UnAuthedProviders, ...options })


global.React = React;
global.render = render;
global.userEvent = userEvent;
global.renderWithProviders = renderWithProviders