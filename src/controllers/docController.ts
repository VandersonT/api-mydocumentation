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

export const addNewDoc = async (req: Request, res: Response) => {

    const { name, description, image, author} = req.body;

    // Check all field
    if(!name || !description || !image || !author){
        res.json({error: "You must send us all fields"});
        return;
    }

    /*Save doc data to the data base*/
    let newDoc = await doc.addDoc(name, description, image, parseInt(author));

    /*Return the result*/
    res.json({error: "", newDoc});
}

export const updateDoc = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { name, description, image, author} = req.body;

    // Check id field
    if(!id){
        res.json({error: "You must send us an id"});
        return;
    }

    /*Try to update*/
    let updateDoc = await doc.updateDoc(parseInt(id), name, description, image, parseInt(author));


    /*Return the result*/
    if(!updateDoc){
        res.json({error: "We couldn't find that doc"});
        return;
    }

    res.json({error: "", updateDoc});
}

export const getViews = async (req: Request, res: Response) => {

    let { docId } = req.body;

    if(!docId){
        res.json({error: "You must send a docId."});
        return;
    }

    let docViews = await doc.getView(docId);

    res.json({error: "", docViews});
}

export const addDocView = async (req: Request, res: Response) => {

    let { docId, ip } = req.body;

    if(!docId || !ip){
        res.json({error: "You must send an docId and a ip."});
        return;
    }

    let newView = await doc.addView(docId, ip);

    res.json({error: ""});
}

export const getDocBySlug = async (req: Request, res: Response) => {

    let { slug } = req.params;

    if(!slug){
        res.json({ error: 'You must submit a slug to be searched.' });
        return;
    }

    let documentation = await doc.getDocByName(slug);

    if(!doc){
        res.json({ error: "We couldn't find this doc." });
        return;
    }

    res.json({ error: '', documentation });
}