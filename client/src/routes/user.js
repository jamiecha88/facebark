/*  user/overview  */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../pages/UserPage/ProfilePage/Profile'
import Messages from '../pages/UserPage/MessagesPage/Messages'
import Friends from '../pages/UserPage/FriendsPage/Friends'
import Notifications from '../pages/UserPage/NotificationsPage/Notifications'
import Settings from '../pages/UserPage/SettingsPage/Settings'


const userRoutes = [
    {
        path: '/user/friends',
        component: Friends,
    },
    {
        path: '/user/profile',
        component: Profile,
    },
    {
        path: '/user/messages',
        component: Messages,
    },
    {
        path: '/user/notifications',
        component: Notifications,
    },
    {
        path: '/user/settings',
        component: Settings,
    },
]

export default function Routes() {
    return (
      <Switch>
        {userRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    );
}