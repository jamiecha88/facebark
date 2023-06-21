import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/DashboardPage/Dashboard";
import Profile from "../pages/DashboardPage/sections/Profile/Profile";
import Messages from "../pages/DashboardPage/sections/Messages/Messages";
import Friends from "../pages/DashboardPage/sections/Friends/Friends";
import Settings from "../pages/DashboardPage/sections/Settings/Settings";

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
