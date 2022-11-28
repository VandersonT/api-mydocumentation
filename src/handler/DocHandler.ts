/*

    NOTE: This file is just for dealing with the doc database
    
*/

/*--------------------------Imports--------------------------*/
import { Doc } from '../models/Documentation';
/*-----------------------------------------------------------*/


export const getDocs = async () => {

    let docs = await Doc.findAll();

    return docs;
}

export const getDoc = async (id: number) => {

    let doc = await Doc.findByPk(id);

    return doc;
}

export const deleteDoc = async (id: number) => {

    let removedDoc = await Doc.destroy({where: {id}});

    return removedDoc;
}