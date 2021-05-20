import { screen, render } from '@testing-library/react';
import Search from '.';

describe('Search', () => {
    
})

describe('Search', () => {
    test('it contains a search bar', () => {
        const searchBar = screen.queryByRole('input');
        expect(searchBar).toBeInTheDocument();
    })
  
    test('it contains a magnifying glass icon', () => {
      const icon = screen.queryByRole('i');
      expect(icon).toBeInTheDocument();
    })
  
    test('it contains dropdown filters', () => {
      const icon = screen.queryByRole('');
      expect(icon).toBeInTheDocument();
    })

    test('it shows page header', () => {
        render(<Search />)
        expect(screen.getAllByRole('heading')[0].textContent).toContain('Results');
    })
  
})
  