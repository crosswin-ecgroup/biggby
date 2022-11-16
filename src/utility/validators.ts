import validator from 'validator';

const isEmail = (email: string = ''): boolean => {
    return validator.isEmail(email);
}

const validatePassword = (password: string = ''): boolean => {
    return validator.isLength(password, {min: 5, max: 15});
}

export { isEmail, validatePassword }
