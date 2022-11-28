/*--------------------------Imports--------------------------*/
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import * as helper from '../handler/HelperHandler';
import * as doc from '../handler/DocHandler';
/*----------------------------------------------------------*/


dotenv.config();


export const getDocs = async (req: Request, res: Response) => {

    let docs = await doc.getDocs();

    res.json({error: "", docs});
}

export const getDoc = async (req: Request, res: Response) => {

    const { id } = req.params;

    // Check id field
    if(!id){
        res.json({error: "You must send us an id."});
        return;
    }

    let docFound = await doc.getDoc(parseInt(id));

    if(!docFound){
        res.json({error: "We couldn't find that doc."});
        return;
    }

    res.json({error: "", docFound});
}

export const deleteDoc = async (req: Request, res: Response) => {

    const { id } = req.params;

    let removedDoc = await doc.deleteDoc(parseInt(id));

    if(!removedDoc){
        res.json({error: "We couldn't find that doc"});
        return;
    }

    res.json({error: ""});
}