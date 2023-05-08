import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    component: NotFound
  }
];

export default routes;

/* Use protected routes for authenticated users, and public routes for non-authenticated users. You can use a higher-order component to protect routes that require authentication.

Use client-side routing with React Router to handle routing on the client-side. This allows for faster navigation and a better user experience. */