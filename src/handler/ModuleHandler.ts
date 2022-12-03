/*

    NOTE: This file is just for dealing with the module database
    
*/

/*--------------------------Imports--------------------------*/
import { Module } from '../models/Module';
/*-----------------------------------------------------------*/

export const getModules = async () => {
    
    let modules = await Module.findAll();

    return modules;
}

export const getModule = async (id: number) => {

    let moduleFound = await Module.findByPk(id);

    return moduleFound;
}

export const createModule = async (title: string, doc_id: number) => {

    let newModule = await Module.create({
        title,
        doc_id
    });

    return newModule;
}

export const editModule = async (id: number, title: string, doc_id: number) => {

    let moduleFound = await Module.findByPk(id);

    if(moduleFound){
        if(title) moduleFound.title = title;
        if(doc_id) moduleFound.doc_id = doc_id;
        await moduleFound.save();

        return moduleFound;
    }

    return false;
}

export const deleteModule = async (id: number) => {

    let removedModule = await Module.destroy({where: {id}});

    return removedModule;
}