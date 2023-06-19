import { Router } from 'express';
import homeRoutes from './home';
import aboutRoutes from './about';
import contactRoutes from './contact';

const router = Router();

// Mount server-side routes
router.use('/', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/contact', contactRoutes);

export default router;
