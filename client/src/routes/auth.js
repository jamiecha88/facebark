import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/DashboardPage/Dashboard';
import Error from '../pages/ErrorPage/Error';

const authRoutes = [
    {
        path: '/:userId',
        component: Dashboard,
        exact: true,
    },
    {
        path: '/404',
        component: Error,
    },
    {
        path: '*',
        redirect: '/404',
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