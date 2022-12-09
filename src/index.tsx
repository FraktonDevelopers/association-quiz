import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateEdit from './pages/CreateEdit';
import ShowAdmin from './pages/ShowAdmin';
import ShowClient from './pages/ShowClient';
import HowToPlay from "./pages/HowToPlay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-edit",
    element: <CreateEdit />,
  },
  {
    path: "/show-admin",
    element: <ShowAdmin />,
  },
  {
    path: "/show-client",
    element: <ShowClient />,
  },
  {
    path: "/how-to-play",
    element: <HowToPlay />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

