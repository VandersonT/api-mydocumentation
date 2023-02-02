/*--------------------------Imports--------------------------*/
import { Router } from 'express';
import * as AdminController from '../controllers/adminController';
import * as DocController from '../controllers/docController';
import * as ModuleController from '../controllers/moduleController';
import * as TopicController from '../controllers/topicController';
import * as SystemController from '../controllers/systemController';
import multer from 'multer';
/*-----------------------------------------------------------*/

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp');
    },
    filename: (req, file, cb) => {
        let randomName = Math.floor(Math.random() * 9999999);

        if(file.mimetype == 'image/png')
            cb(null, `${randomName+Date.now()}.png`);
        else
            cb(null, `${randomName+Date.now()}.jpg`);
        
    }
});

const upload = multer({
    storage: storageConfig,
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];

        cb(null, allowed.includes(file.mimetype));
    },
    limits: {
        fileSize: 10000000
    }
});

const router = Router();

/*------------------General-Routes------------------------*/
router.get('/globalDatas', SystemController.getTotalDocs);
/*------------------------------------------------------*/

/*------------------Staff-Routes------------------------*/
router.post('/staff', AdminController.registerStaff); //name, email, pass, phone, position
router.post('/login', AdminController.loginStaff);//Post-> email, password
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
router.get('/docBySlug/:slug', DocController.getDocBySlug);
router.get('/docByName/:search', DocController.getDocByName);
router.get('/mostViewedDocs/:amount', DocController.getDocsMostViewed);
/*------------------------------------------------------*/


/*------------------Doc_view-Routes---------------------*/
router.get('/docViews', DocController.getViews);
router.post('/docView', DocController.addDocView);
/*------------------------------------------------------*/


/*------------------Module-Routes-----------------------*/
router.get('/modules', ModuleController.getModules);
router.get('/module/:id', ModuleController.getModule);
router.post('/module', ModuleController.createModule);
router.put('/module/:id', ModuleController.editModule);
router.delete('/module/:id', ModuleController.deleteModule);
router.get('/moduleByDoc/:id', ModuleController.getModuleByDoc);
/*------------------------------------------------------*/


/*-------------------Topic-Routes-----------------------*/
router.get('/topics', TopicController.getTopics);
router.get('/topic/:id', TopicController.getTopic);
router.post('/topic', TopicController.createANewTopic);
router.put('/topic/:id', TopicController.updateTopic);
router.delete('/topic/:id', TopicController.deleteTopic);
router.get('/topicByDoc/:id', TopicController.getTopicByDoc);
router.get('/topicBySlug/:slug', TopicController.getTopicBySlug);
router.get('/topicByName/:search/:docId', TopicController.getTopicByName);
/*------------------------------------------------------*/


/*-------------------System-Routes----------------------*/
router.get('/system', SystemController.getSystemStatus);
router.put('/system', SystemController.updateSystemStatus);
/*------------------------------------------------------*/


/*--------------------View-Routes-----------------------*/
router.get('/views', SystemController.getView);
router.post('/view', SystemController.addView);
/*------------------------------------------------------*/


/*-------------------Media-Routes-----------------------*/
router.post('/upload', upload.single('media'), SystemController.uploadFile);
router.delete('/media/:id', SystemController.deleteMedia);
router.get('/media', SystemController.getAllMedia);
router.get('/media/:id', SystemController.getMedia);
router.put('/media/:id', SystemController.updateMediaInfo);
/*------------------------------------------------------*/

export default router;