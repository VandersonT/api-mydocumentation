/*

    NOTE: This file is just for dealing with the System and View database
    
*/


/*--------------------------Imports--------------------------*/
import { System } from '../models/System';
import { View } from '../models/View';
import { Media } from '../models/Media';
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

export const saveMedia = async (mediaName: string, alternative_text: string, author: number) => {

    let createdUser = await Media.create({
        name: mediaName,
        alternative_text,
        author,
        created_at: new Date()
    });

}