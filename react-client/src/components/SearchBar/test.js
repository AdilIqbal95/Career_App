import { render, screen } from '@testing-library/react';
import SearchBar from '.';

describe('SearchBar', () => {
  test('it contains a search bar', () => {
      render(<SearchBar />)
      const searchBar = screen.queryByRole('input');
      expect(searchBar).toBeInTheDocument();
  })

  test('it contains a magnifying glass icon', () => {
    render(<SearchBar />)
    const icon = screen.queryByRole('i');
    expect(icon).toBeInTheDocument();
  })

  test('it contains dropdown filters', () => {
    render(<SearchBar />)
    const icon = screen.queryByRole('');
    expect(icon).toBeInTheDocument();
  })


})
