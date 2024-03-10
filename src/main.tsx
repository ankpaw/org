import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Cards from './routes/cards/cards';
import Home from './routes/home/home';
import MyCards from './routes/cards/mycards/mycards';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cards',
        element: <Cards />,
        children: [
          {
            index: true,
            path: 'my-cards',
            element: <MyCards />,
          },
          {
            path: 'all',
            element: <div>All Cards</div>,
          },
        ],
      },
      {
        path: '/payments',
        element: <div>Payments</div>,
      },
      {
        path: '/credit',
        element: <div>Credit</div>,
      },
      {
        path: '/settings',
        element: <div>Settings</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
