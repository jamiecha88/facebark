import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Contact from '../pages/Home/sections/Contact';
import About from '../pages/Home/sections/About';
import Features from '../pages/Home/sections/Features';

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


