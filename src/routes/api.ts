import { Router } from 'express';
import * as ApiController from '../controllers/adminController';


const router = Router();

router.post('/staff', ApiController.registerStaff);

export default router;