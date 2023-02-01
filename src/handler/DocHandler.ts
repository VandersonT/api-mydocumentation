/*

    NOTE: This file is just for dealing with the doc and docView database
    
*/

/*--------------------------Imports--------------------------*/
import { Op } from 'sequelize';
import { Doc } from '../models/Documentation';
import { DocView } from '../models/Doc_view';
import sequelize from 'sequelize';
/*-----------------------------------------------------------*/


export const getDocs = async (page: number) => {

    let perPage = 2;
    let offset = 0;
    let docs;
    let totalPages = await Doc.count();
    let anotherPage = false;

    if(page){
        (page * perPage >= totalPages) ? (anotherPage = false) : (anotherPage = true);


        let offset = (page - 1) * perPage;

        docs = await Doc.findAll({
            offset: offset,
            limit: perPage
        });

        return [docs, {anotherPage}];
    }else{
        docs = await Doc.findAll();
        return docs;
    }

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

export const getDocBySlug = async (slug: string) => {

    let doc = await Doc.findOne({
        where: {
            slug
        }
    })

    return doc;
}

export const getDocByName = async (search: string) => {

    let docFound = await Doc.findAll({
        where: {
            name: {
                [Op.iLike]: `%${search}%`
            }
        }
    })

    return docFound; 
}

export const getDocsMostViewed = async (amount: number) => {   

    /*Get all views of all docs*/
    let views:any = await DocView.findAll({
        attributes: [
            'doc_id',
            [sequelize.fn('count', sequelize.col('doc_id')), 'amount'],
        ],
        group: ['doc_id'],
        order: [[sequelize.col("amount"), "DESC"]],
        limit: amount
    })

    /*Links views with their documentation*/
    let doc = [];

    for(let i = 0; i < views.length; i++){
        let docSingle = await Doc.findByPk(views[i]['doc_id'],{attributes: ['name']});

        let aux = {
            name: docSingle?.dataValues['name'],
            amount: parseInt(views[i].dataValues['amount']),
            doc_id: views[i]['doc_id'],
        }

        doc.push(aux);
    }

    return doc;
}