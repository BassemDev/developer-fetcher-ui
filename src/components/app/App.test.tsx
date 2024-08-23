// External modules import
import React from 'react';
import { render, screen } from '@testing-library/react';

// Internal import
import { App } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
