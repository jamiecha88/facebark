//App.jsx is the Homepage of app (welcome user, signin/register)

import * as React from 'react';
import { BrowserRouter as Switch, Router, Route } from 'react-router-dom';
import Homepage from '../src/pages/Homepage'
import routes from './routes'

export default function App() {
  return (
    <div className="">
      <Homepage />
    </div>
  );
}

