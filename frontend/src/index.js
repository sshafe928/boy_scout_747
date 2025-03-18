import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Calendar from './CalendarPage';
import Photos from './PhotosPage';
import News from './NewsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EaglesNest from './EaglesNest';
import ResourcesPage from './ResourcesPage';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/calendar', element: <Calendar /> },
  { path: '/photos', element: <Photos /> },
  { path: '/news', element: <News /> },
  { path: '/eagles-nest', element: <EaglesNest /> },
  { path: '/resources', element: <ResourcesPage /> },
  { path: '/yiVHQSLPA5z4bWJ', element: <AdminLogin /> },
  { path: '/iHEID1JWLUto8s7', element: <ProtectedRoute><AdminPage /></ProtectedRoute> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
