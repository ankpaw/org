import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

describe('App', () => {
  describe('App', () => {
    it('should render successfully', () => {
      const { baseElement } = render(
        <Router>
          <App />
        </Router>
      );
      expect(baseElement).toBeTruthy();
    });

    it('should have sidenav home nav text', () => {
      const { getByText } = render(
        <Router>
          <App />
        </Router>
      );
      expect(getByText(/Home/gi)).toBeTruthy();
    });
  });
});
