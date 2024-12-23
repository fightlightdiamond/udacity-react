import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
  it('will have all expected fields', () => {
    const { getAllByText, getByTestId, getByText } = render(<App />);

    // Kiểm tra có 2 nhãn 'name'
    const labels = getAllByText(/name/i);
    expect(labels.length).toEqual(2);

    // Kiểm tra input 'first-name-input' và 'last-name-input'
    const firstNameInput = getByTestId('first-name-input');
    const lastNameInput = getByTestId('last-name-input');
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    // Kiểm tra nút 'Submit'
    const submitButton = getByText('Submit');
    expect(submitButton).toBeInTheDocument();
  });
});
