/*--------------------------Imports--------------------------*/
import { Router } from 'express';
import * as ApiController from '../controllers/adminController';
/*-----------------------------------------------------------*/


const router = Router();

/*------------------Staff-Routes------------------------*/
router.post('/staff', ApiController.registerStaff);
router.post('/login', ApiController.loginStaff);
router.post('/auth', ApiController.authentication);
router.put('/staff/:id', ApiController.editStaff);
router.delete('/staff/:id', ApiController.deleteStaff);
router.get('/staff', ApiController.getAllAdmins);
router.get('/staff/:id', ApiController.getAdmin);
/*------------------------------------------------------*/


/*---------------Documentaion-Routes--------------------*/
/*------------------------------------------------------*/


/*------------------Module-Routes-----------------------*/
/*------------------------------------------------------*/


/*-------------------Topic-Routes-----------------------*/
/*------------------------------------------------------*/


/*-------------------System-Routes----------------------*/
/*------------------------------------------------------*/


/*--------------------View-Routes-----------------------*/
/*------------------------------------------------------*/


/*------------------Doc_view-Routes---------------------*/
/*------------------------------------------------------*/


/*-------------------Media-Routes-----------------------*/
/*------------------------------------------------------*/

export default router;