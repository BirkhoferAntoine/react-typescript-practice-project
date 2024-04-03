import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home.tsx';
import SessionsPage from './pages/Sessions.tsx';
import SessionPage from './pages/Session.tsx';
import Root from './pages/Root.tsx';
import Page404 from './pages/Page404.tsx';
import SessionsContextProvider from './context/sessions-context.tsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'sessions', element: <SessionsPage /> },
      { path: 'sessions/:id', element: <SessionPage /> },
      { path: '*', element: <Page404 /> },
    ],
  },
]);

function App() {
  return (
      <SessionsContextProvider>
        <RouterProvider router={Router} />
      </SessionsContextProvider>
  );
}

export default App;
