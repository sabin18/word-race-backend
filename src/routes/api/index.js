import Router from 'express';
import resultsRoutes from './results'

const router = new Router();
router.use('/results', resultsRoutes);


export default router;
