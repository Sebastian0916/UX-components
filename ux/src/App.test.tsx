import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./route/route', () => {
  return () => <div data-testid="mocked-routers">Mocked Routers</div>;
});

test('renders App component with Routers', () => {
  const { getByTestId } = render(<App />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const routersElement = getByTestId('mocked-routers');

  expect(routersElement).toBeInTheDocument();
});
