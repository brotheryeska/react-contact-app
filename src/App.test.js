import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Home from './pages/Home';

test('Render Contact App', async () => {
  render(<Home/>)
  expect(screen.getByText(/^Contact List:/)).toHaveTextContent('Contact List')
});
