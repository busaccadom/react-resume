import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(
    <Router location={history.location} navigator={history}>
    <App />,
  </Router>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
