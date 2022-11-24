import { Router } from 'express';
import * as ApiController from '../controllers/adminController';


const router = Router();

router.post('/staff', ApiController.registerStaff);
router.post('/login', ApiController.loginStaff);
router.post('/auth', ApiController.authentication);
router.delete('/deleteStaff/:id', ApiController.deleteStaff);

export default router;