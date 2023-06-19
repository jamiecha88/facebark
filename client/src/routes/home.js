import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Register from '../pages/RegisterPage/Register';
import Login from '../pages/LoginPage/Login';
import Contact from '../pages/ContactPage/Contact';
import About from '../pages/AboutPage/About';
import Features from '../pages/FeaturesPage/Features';

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


