import { Request, Response } from 'express';
import dotenv from 'dotenv';
import * as helper from '../handler/HelperHandler';
import * as staff from '../handler/StaffHandler';

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
        res.json({error: "email is not valid"});
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
    const token = helper.createToken(255);

    /*Save user data to the data base*/
    let createdUser = await staff.createStaff(name, email, encryptedPassword, token, phone, position);

    res.json({error: "", createdUser});
}