import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles.css'; // Your global styles

// Import your layout and page components
import App from './App.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';

// Create the browser router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The main layout (Header, Footer, Outlet)
    children: [
      {
        index: true, // This makes Home the default page for '/'
        element: <Home />,
      },
      {
        path: 'about', // This creates the /about route
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);