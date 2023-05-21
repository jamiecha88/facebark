// Use a hierarchical URL structure to create nested routes, which represent the different parts of your application. For example, you can have /schedule as the top-level route, and then have nested routes for /:id, /:id/edit, and /:id/delete for specific schedules.

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Schedule from '../pages/UserPage/sections/Schedule'

const scheduleRoutes = [
    {
        path: '/schedule',
        component: Schedule,
    }
]

export default function Scheduler(){
    return(
        <Switch>
        {scheduleRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    )
}