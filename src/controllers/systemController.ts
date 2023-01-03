/*--------------------------Imports--------------------------*/
import { Request, Response } from 'express';
import * as system from '../handler/SystemHandler';
import sharp from 'sharp';
import { unlink } from 'fs/promises';
/*----------------------------------------------------------*/

export const getSystemStatus = async (req: Request, res: Response) => {

    let systemStatus = await system.getSystemStatus();

    if(systemStatus.length < 1){
        res.json({error: "|SevereError| Couldn't find any system information"});
        return;
    }

    res.json({error: "", systemStatus});
}

export const updateSystemStatus = async (req: Request, res: Response) => {
    
    let { status, id } = req.body;

    if(!status || !id){
        res.json({error: "You must submit a status and an id."});
        return;
    }
    
    let editedStatus = await system.updateSystemStatus(status, id);

    if(!editedStatus){
        res.json({error: "Couldn't find this id."});
        return;
    }

    res.json({error: ''});
}

export const getView = async(req: Request, res: Response) => {

    let views = await system.getView();

    res.json({error: "", views});
}

export const addView = async (req: Request, res: Response) => {

    let { ip } = req.body;
    
    if(!ip){
        res.json({error: "You must send us an ip."});
        return;
    }

    let addedView = await system.addView(ip);

    res.json({error: ""});
}

export const uploadFile = async (req: Request, res: Response) => {

    if(req.file){

        await sharp(req.file.path).toFile(`public/media/${req.file.filename}`);

        await unlink(req.file.path);

        res.json({ image: `${req.file.fieldname}` });

    }else{
        res.status(400);
        res.json({ error: 'Arquivo invalido.' });    
    }
}