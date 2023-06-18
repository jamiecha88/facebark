import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/DashboardPage/Dashboard";
import Profile from "../pages/UserPage/ProfilePage/Profile";
import Messages from "../pages/UserPage/MessagesPage/Messages";
import Friends from "../pages/UserPage/FriendsPage/Friends";
import Settings from "../pages/UserPage/SettingsPage/Settings";

const userRoutes = [
    {
        path: "/:userId",
        component: Dashboard,
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
