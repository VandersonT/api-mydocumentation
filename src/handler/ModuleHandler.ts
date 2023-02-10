/*

    NOTE: This file is just for dealing with the module database
    
*/

/*--------------------------Imports--------------------------*/
import { Module } from '../models/Module';
import { Topic } from '../models/Topic';
/*-----------------------------------------------------------*/

export const getModules = async () => {
    
    let modules = await Module.findAll({
        order: [
            ['id', 'ASC']
        ]
    });

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

    let deletedTopics = await Topic.destroy({
        where: {
            module_id: id
        }
    });

    return removedModule;
}

export const getModuleByDoc = async (id: number) => {
    
    let modules = await Module.findAll({
        where: {doc_id: id}
    });

    return modules;

}