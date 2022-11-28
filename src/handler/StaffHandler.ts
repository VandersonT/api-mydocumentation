/*

    NOTE: This file is just for dealing with the staff database
    
*/

/*--------------------------Imports--------------------------*/
import { stringify } from 'querystring';
import { Admin } from '../models/Admin';
import * as helper from '../handler/HelperHandler';
import dotenv from 'dotenv';
/*-----------------------------------------------------------*/

dotenv.config();

export const createStaff = async (name: string, email: string, encryptedPassword: string, token: string, phone: string, position: number) => {

    let createdUser = await Admin.create({
        name,
        email,
        pass: encryptedPassword,
        token,
        phone,
        position,
        created_at: new Date()
    });

    let filteredUser = {name, email, phone, position, token, created_at: createdUser.created_at};
    
    console.log('Então: '+filteredUser);

    return filteredUser;
}

export const emailAlreadyExists = async (email: string) => {

    let userFound = await Admin.findAll({where: { email }});

    return (userFound.length > 0) ? true : false;
}


export const signIn = async (email: string, password: string) => {

    /*Search for user with this email*/
    let userFound = await Admin.findAll({
        attributes: ['email', 'pass', 'token'],
        where:{email},
        limit: 1
    });

    /*Check if the email was found*/
    if(userFound.length > 0){

        /*Encrypts the received password and compares it with the database password*/
        let encryptedPassword = helper.encryptPassword(password, process.env.ENCRYPTION_PASS as string);

        if(encryptedPassword === userFound[0]['pass']){
            let token = userFound[0]['token'];
            return token;
        }

    }

    return false;
}

export const auth = async (token: string) => {

    //Check token and return the user if it was found
    let userFound = await Admin.findAll({
        attributes: ['name', 'email', 'phone', 'position', 'token',],
        where:{token},
        limit: 1
    });

    return (userFound.length > 0) ? userFound : false;
}

export const deleteStaff = async (id: number) => {

    let removedUser = await Admin.destroy({where: { id }});

    return (removedUser) ? true : false;
}

export const editUser = async (id: number, name: string, email: string, pass: string, phone: string, position: number) => {

    let userFound = await Admin.findByPk(id);
    
    if(userFound){
        if(name) userFound.name = name;
        if(email) userFound.email = email;
        if(pass) userFound.pass = pass;
        if(phone) userFound.phone = phone;
        if(position) userFound.position = position;
        await userFound.save();

        return userFound;
    }

    return false;
}

export const getAllAdmins = async () => {
    let admins = await Admin.findAll({
        attributes: ['name', 'email', 'phone', 'position', 'token']
    });

    return admins;
}

export const getAdmin = async (id: number) => {
    let admin = await Admin.findByPk(id, {
        attributes: ['name', 'email', 'phone', 'position', 'token']
    });

    return admin;
}