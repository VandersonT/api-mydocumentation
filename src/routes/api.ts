/*--------------------------Imports--------------------------*/
import { Router } from 'express';
import * as AdminController from '../controllers/adminController';
import * as DocController from '../controllers/docController';
/*-----------------------------------------------------------*/


const router = Router();

/*------------------Staff-Routes------------------------*/
router.post('/staff', AdminController.registerStaff);
router.post('/login', AdminController.loginStaff);
router.post('/auth', AdminController.authentication);
router.put('/staff/:id', AdminController.editStaff);
router.delete('/staff/:id', AdminController.deleteStaff);
router.get('/staff', AdminController.getAllAdmins);
router.get('/staff/:id', AdminController.getAdmin);
/*------------------------------------------------------*/


/*---------------Documentaion-Routes--------------------*/
router.get('/docs', DocController.getDocs);
router.get('/doc/:id', DocController.getDoc);
router.delete('/doc/:id', DocController.deleteDoc);
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