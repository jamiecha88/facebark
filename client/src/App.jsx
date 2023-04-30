//App.jsx is the Homepage of app (welcome user, signin/register)

// client-side app.jsx
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import mainRoutes from './routes/main';
//import Homepage from './pages/Homepage';

export default function App() {
// const routes = [
//   {
//     path: '/',
//     exact: true,
//     component: Homepage,
//   },
// ];
  return (
    <BrowserRouter>
      <Switch>
        {mainRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
