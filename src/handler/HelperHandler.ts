export const emailValidate = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export const emailExists = (email: string) => {

}

export const passwordValidate = (pass: string) => {
    let isUpperCase = /[A-Z]/;
    let isLowerCase = /[a-z]/; 
    let thereIsNumber = /[0-9]/;
    let isValid = true;

    if(!isUpperCase.test(pass) || !isLowerCase.test(pass) || !thereIsNumber.test(pass))
        isValid = false;
    
    return isValid;
}

export const encryptPassword = (pass: string, encryptionPass: string) => {
    const crypto = require("crypto");
    const alg = 'aes-256-ctr';

    const cipher = crypto.createCipher(alg, encryptionPass);
    const crypyted = cipher.update(pass, 'utf8', 'hex');
    return crypyted;
};

export const decryptPassword = (pass: string, encryptionPass: string) => {
    const crypto = require("crypto");
    const alg = 'aes-256-ctr';
    const decipher = crypto.createDecipher(alg, encryptionPass);
    const plain = decipher.update(pass, 'hex', 'utf8');

    return plain;
};

export const createToken = (length: number) => {
    let token = "";

    do{
        token += Math.random().toString(36).substring(2);
    }while(token.length < length);

    return token;
}