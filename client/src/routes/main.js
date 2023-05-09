//central location for exporting all routes in the app. Import all route config files, combine into a single array, and export them for use in main App component

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Error from '../pages/ErrorPage/Error';

const mainRoutes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    component: Error
  }
];

export default function Routes() {
  return (
    <Switch>
      {mainRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
}

/* Use protected routes for authenticated users, and public routes for non-authenticated users. You can use a higher-order component to protect routes that require authentication.

Use client-side routing with React Router to handle routing on the client-side. This allows for faster navigation and a better user experience. */