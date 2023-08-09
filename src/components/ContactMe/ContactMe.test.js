import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactMe from './ContactMe';

describe('<ContactMe />', () => {
  test('it should mount', () => {
    render(<ContactMe />);
    
    const contactMe = screen.getByTestId('ContactMe');

    expect(contactMe).toBeInTheDocument();
  });
});