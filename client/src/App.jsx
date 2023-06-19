import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/main';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
