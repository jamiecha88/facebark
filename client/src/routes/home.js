//central location for exporting all routes in the app. Import all route config files, combine into a single array, and export them for use in main App component
//routes directory contains route definitions that use the functions(inside server/src/controllers) that handle the req/res for each endpoint

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Register from '../pages/RegisterPage/Register';
import Login from '../pages/LoginPage/Login';
import Contact from '../pages/LandingPage/sections/Contact';
import About from '../pages/LandingPage/sections/About';
import Features from '../pages/LandingPage/sections/Features';

const homeRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/features',
    component: Features,
  },
];

export default function Routes() {
  return (
    <Switch>
      {homeRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
}

/* Use protected routes for authenticated users, and public routes for non-authenticated users. You can use a higher-order component to protect routes that require authentication.

Use client-side routing with React Router to handle routing on the client-side. This allows for faster navigation and a better user experience. */
