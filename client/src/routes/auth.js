import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPage from '../pages/UserPage/UserPage';
import Error from '../pages/ErrorPage/Error';

const authRoutes = [
    {
        path: '/:userId',
        component: UserPage,
        exact: true,
    },
    {
        path: '/404',
        component: Error,
    },
    {
        path: '*',
        redirect: '/404', // Redirect to 404 page for all unmatched routes
    },
]

export default function Routes() {
    return (
      <Switch>
        {authRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    );
}