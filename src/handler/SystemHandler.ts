/*

    NOTE: This file is just for dealing with the staff database
    
*/


/*--------------------------Imports--------------------------*/
import { System } from '../models/System';
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