import { Admin } from '../models/Admin';

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
    
    return filteredUser;
}