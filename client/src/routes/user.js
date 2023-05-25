/*  user/overview  */
// Use a hierarchical URL structure to create nested routes, which represent the different parts of your application. For example, you can have /schedule as the top-level route, and then have nested routes for /:id, /:id/edit, and /:id/delete for specific schedules.

import React from "react";
import { Switch, Route } from "react-router-dom";
import UserPage from "../pages/UserPage/UserPage";
import Profile from "../pages/UserPage/ProfilePage/Profile";
import Messages from "../pages/UserPage/MessagesPage/Messages";
import Friends from "../pages/UserPage/FriendsPage/Friends";
import Notifications from "../pages/UserPage/NotificationsPage/Notifications";
import Settings from "../pages/UserPage/SettingsPage/Settings";

const userRoutes = [
  {
    path: "/:userId",
    component: UserPage,
    routes: [
      {
        path: "/:userId/profile",
        component: Profile,
      },
      {
        path: "/:userId/friends",
        component: Friends,
      },
      {
        path: "/:userId/messages",
        component: Messages,
      },
      {
        path: "/:userId/notifications",
        component: Notifications,
      },
    ],
  },
  {
    path: "/settings",
    component: Settings,
    routes: [
      {
        path: '/settings/account',
      }
    ]
  }
];

export default function Routes() {
  return (
    <Switch>
      {userRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
}
