import { Request, Response } from 'express';
import dotenv from 'dotenv';
import * as helper from '../handler/HelperHandler';
import * as staff from '../handler/StaffHandler';
import { Admin } from '../models/Admin';
import { off } from 'process';

dotenv.config();


export const registerStaff = async (req: Request, res: Response) => {

    let { name, email, pass, phone, position } = req.body;

    /*Check empty fields*/
    if(!name || !email || !pass || !phone || !position) {
        res.json({error: "empty field is not allowed"});
        return;
    }

    /*Check email*/
    if(!helper.emailValidate(email)){
        res.json({error: "Enter a valid email address"});
        return;
    }

    /*Check password*/
    if(!helper.passwordValidate(pass)){
        res.json({error: "Your password is too weak"});
        return;
    }

    /*Encrypt user password*/
    const encryptedPassword = helper.encryptPassword(pass, process.env.ENCRYPTION_PASS as string);


    /*Create a new token*/
    const token = helper.createToken(200);

    /*Save user data to the data base*/
    let createdUser = await staff.createStaff(name, email, encryptedPassword, token, phone, position);

    /*Return the result*/
    res.json({error: "", createdUser});
}


export const loginStaff = async (req: Request, res: Response) => {
    
    let { email, password } = req.body;

    /*Check Empty Fields*/
    if(!email || !password){
        res.json({error: "Please, fill in all fields"});
        return;
    }

    /*Check email*/
    if(!helper.emailValidate(email)){
        res.json({error: "Enter a valid email address"});
        return;
    }

    /*Check Login*/
    let token =  await staff.signIn(email, password);

    /*Return the result*/
    if(!token){
        res.json({error: 'Email and/or password is incorrect'});
        return;
    }

    res.json({error: '', token});
}


export const authentication = async (req: Request, res: Response) => {

    let { token } = req.body;

    /*Check field*/
    if(!token){
        res.json({error: 'Token field is empty'});
        return;
    }

    /*Check if the token is valid*/
    let userFound =  await staff.auth(token);
    

    /*Return the result*/
    if(!userFound){
        res.json({error: "The sent token isn't associated with any account."});
        return;
    }

    res.json({error: '', userFound});
}

export const deleteStaff = async (req: Request, res: Response) => {
    
    let { id } = req.params;

    /*Check id field*/
    if(!id){
        res.json({error: "You must send us an id."});
        return;
    }

    /*try to remove admin*/
    let wasRemoved =  await staff.deleteStaff(parseInt(id));


    /*Return the result*/
    if(!wasRemoved){
        res.json({error: "We couldn't find anyone with that id"});
        return;
    }

    res.json({error: ''});
}