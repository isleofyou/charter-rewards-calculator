import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.jsx';

test('renders the main application', () => {
  render(<App />);
  
  expect(screen.getByText('Charter Wild Kingdom Pet Supplies')).toBeInTheDocument();
  expect(screen.getByText('Customer Rewards Program')).toBeInTheDocument();
  expect(screen.getByText('Skip to main content')).toBeInTheDocument();
});

test('renders loading state initially', () => {
  render(<App />);
  
  expect(screen.getByText('Loading animal care specialist rewards...')).toBeInTheDocument();
});
