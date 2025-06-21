import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Search from './components/search';
import { useState } from 'react';

// Wrapper that manages internal state to simulate real behavior
function SearchWrapper({ onSearch }: { onSearch: (search: string) => void }) {
  const [search, setSearch] = useState('');

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch(value);
  };

  return <Search search={search} onSearch={handleSearch} />;
}

describe('Search component', () => {
  it('calls onSearch with correct values when typing and clearing', async () => {
    const mockOnSearch = vi.fn();
    render(<SearchWrapper onSearch={mockOnSearch} />);

    const input = screen.getByRole('textbox');
    const clearButton = screen.getByRole('button');

    // User types "bear"
    await userEvent.type(input, 'bear');
    expect(mockOnSearch).toHaveBeenLastCalledWith('bear');
    expect(input).toHaveValue('bear');

    // User clicks clear button
    await userEvent.click(clearButton);
    expect(mockOnSearch).toHaveBeenLastCalledWith('');
    expect(input).toHaveValue('');
  });
});