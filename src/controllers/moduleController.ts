/*--------------------------Imports--------------------------*/
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import * as moduleH from '../handler/ModuleHandler';
/*----------------------------------------------------------*/

dotenv.config();

export const getModules = async (req: Request, res: Response) => {

    let modules = await moduleH.getModules();

    res.json({error: "", modules});
}

export const getModule = async (req: Request, res: Response) => {

    const { id } = req.params;

    /*Search module*/
    let moduleFound = await moduleH.getModule(parseInt(id));

    if(!moduleFound){
        res.json({error: "We couldn't find the module"});
        return;
    }

    res.json({error: "", moduleFound});
}

export const createModule = async (req: Request, res: Response) => {

    const { title, doc_id } = req.body;

    if(!title || !doc_id){
        res.json({error: "You must provide a title and a doc_id"});
        return;
    }

    let newModule = await moduleH.createModule(title, parseInt(doc_id));

    res.json({error: "", newModule});
}

export const editModule = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { title, doc_id } = req.body;

    if(!id){
        res.json({error: "You must provide an id."});
        return;
    }

    let editedModule = await moduleH.editModule(parseInt(id), title, parseInt(doc_id));

    if(!editedModule){
        res.json({error: "We couldn't find the module with that id."});
        return;
    }

    res.json({erro: "", editedModule});
}

export const deleteModule = async (req: Request, res: Response) => {

    const { id } = req.params;

    let deletedModule = await moduleH.deleteModule(parseInt(id));

    if(!deletedModule){
        res.json({error: "We couldn't find that module."});
        return;
    }

    res.json({error: ""});
}

export const getModuleByDoc = async (req: Request, res: Response) => {

    const { id } = req.params;

    /*Search module*/
    let modulesFound = await moduleH.getModuleByDoc(parseInt(id));

    res.json({error: "", modulesFound});

}