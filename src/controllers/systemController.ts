/*--------------------------Imports--------------------------*/
import { Request, Response } from 'express';
import * as system from '../handler/SystemHandler';
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