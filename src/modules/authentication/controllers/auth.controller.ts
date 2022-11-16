import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken';


import { isEmail, validatePassword } from "../../../utility/validators";

const login = async (req: Request, res: Response) => {
    const JWT_SECRET: string = process.env.JWT_SECRET!;
    const loginEmail: string = process.env.SAMPLE_EMAIL!;
    const loginPassword: string = process.env.SAMPLE_PASSWORD!;

    const email: string = req.body.email;
    const password: string = req.body.password;
    try {
        // Demo purpose directly validate the username and password, realtime validate with database and verify the password with some encryption algorithm
        if (isEmail(email) && validatePassword(password) && email === loginEmail && password === loginPassword) {
            const token = sign({
                company: 'Biggby'
            }, JWT_SECRET, {expiresIn: '1h'});
            res.status(200).send({token});
        } else {
            res.status(400).send('Invalid userName or password');
        }

    } catch (e: any) {
        res.status(500).send(e.message);
    }
}

const forgetPassword = async (req: Request, res: Response) => {
    try {
        // Forget password logic will come here!
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}


export { login, forgetPassword }
