import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from '../App.jsx';
import Profile from '../components/Profile';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/profile', element: <Profile /> },
], { basename: '/' });

const AppRouter = () => {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default AppRouter;
