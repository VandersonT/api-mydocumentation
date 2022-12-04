/*--------------------------Imports--------------------------*/
import { Router } from 'express';
import * as AdminController from '../controllers/adminController';
import * as DocController from '../controllers/docController';
import * as ModuleController from '../controllers/moduleController';
import * as TopicController from '../controllers/topicController';
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
router.post('/doc', DocController.addNewDoc);
router.put('/doc/:id', DocController.updateDoc);
/*------------------------------------------------------*/


/*------------------Module-Routes-----------------------*/
router.get('/modules', ModuleController.getModules);
router.get('/module/:id', ModuleController.getModule);
router.post('/module', ModuleController.createModule);
router.put('/module/:id', ModuleController.editModule);
router.delete('/module/:id', ModuleController.deleteModule);
/*------------------------------------------------------*/


/*-------------------Topic-Routes-----------------------*/
router.get('/topics', TopicController.getTopics);
router.get('/topic/:id', TopicController.getTopic);
router.post('/topic', TopicController.createANewTopic);
router.put('/topic/:id', TopicController.updateTopic);
router.delete('/topic/:id', TopicController.deleteTopic);
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