/*

    NOTE: This file is just for dealing with the System and View database
    
*/


/*--------------------------Imports--------------------------*/
import { System } from '../models/System';
import { View } from '../models/View';
import { Media } from '../models/Media';
import { Doc } from '../models/Documentation';
import { Admin } from '../models/Admin';
/*-----------------------------------------------------------*/

export const getSystemStatus = async () => {

    let systemInfo = await System.findAll({limit: 1});

    return systemInfo;
}

export const updateSystemStatus = async(status: boolean, id: number) => {

    let statusFound = await System.findByPk(id);

    if(statusFound){
        statusFound.is_active = status;
        await statusFound.save();
        return statusFound;
    }

    return false;
}

export const getView = async () => {

    let viewsFound = await View.findAll();

    return viewsFound;
}

export const addView = async(ip: string) => {

    let createdView = await View.create({
        ip,
        date:  new Date()
    });

    return createdView;
}

export const saveMedia = async (title: string, mediaName: string, alternative_text: string, author: number) => {

    let createdUser = await Media.create({
        title,
        name: mediaName,
        alternative_text,
        author,
        created_at: new Date()
    });

}

export const deleteMedia = async (id: number) => {

    let deletedMedia = await Media.destroy({where: { id }});

    return deletedMedia;
}

export const getMedias = async () => {

    let medias = await Media.findAll();

    return medias;
}

export const getMedia = async (id: number) => {

    let mediaFound = await Media.findByPk(id);

    return mediaFound;
}

export const updateMedia = async(id: number, title: string, altText: string) => {

    let mediaFound = await Media.findByPk(id);

    if(mediaFound){
        if(title) mediaFound.title = title;
        if(altText) mediaFound.alternative_text = altText;
        await mediaFound.save();
        return mediaFound;
    }

    return false;
}

export const getDatas = async () => {

    let totalDocs = await Doc.count();
    let totalStaffs = await Admin.count();
    let totalViews = await View.count();
    let systemStatus = await System.findOne();
    console.log(systemStatus?.dataValues['is_active'])
    
    return {
        totalDocs,
        totalStaffs,
        totalViews, 
        systemStatus: systemStatus?.dataValues['is_active'],
        systemVersion: systemStatus?.dataValues['version']
    };
}