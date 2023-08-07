import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Languages from './Languages';

describe('<Languages />', () => {
  test('it should mount', () => {
    render(<Languages />);
    
    const languages = screen.getByTestId('Languages');

    expect(languages).toBeInTheDocument();
  });
});