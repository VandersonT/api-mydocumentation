/*

    NOTE: This file is just for dealing with the doc and docView database
    
*/

/*--------------------------Imports--------------------------*/
import { Doc } from '../models/Documentation';
import { DocView } from '../models/Doc_view';
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

export const addDoc = async (name: string, description: string, image: string, author: number) => {
        
    let newDoc = await Doc.create({
        name,
        description,
        image,
        created_at: new Date(),
        author,
        updated_at: new Date(),
        last_author: author
    });
    
    return newDoc;
}

export const updateDoc = async (id: number, name: string, description: string, image: string, author: number) => {

    let updatedDoc = await Doc.findByPk(id);
    
    if(updatedDoc){
        if(name) updatedDoc.name = name;
        if(description) updatedDoc.description = description;
        if(image) updatedDoc.image = image;
        updatedDoc.updated_at = new Date();
        updatedDoc.last_author = author;
        await updatedDoc.save();
        
        return updatedDoc;
    }

    return false;
}

export const getView = (docId: number) => {

    let docViews = DocView.findAll({where: {id: docId}});

    return docViews;
}

export const addView = async(docId: number, ip: string) => {

    let newView = DocView.create({
        ip,
        doc_id: docId
    });

    return newView;
}

export const getDocByName = async (slug: string) => {

    let doc = await Doc.findOne({
        where: {
            slug
        }
    })

    return doc;
}