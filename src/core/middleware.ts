import { Request, Response, NextFunction } from 'express'
import { verify } from "jsonwebtoken";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    /* Here write logic to check the authorization */
    try{
        const token: any = req.headers.authorization;
        verify(token, process.env.JWT_SECRET!);
        next();
    } catch (error) {
        console.error('UserInfo JWT token error: ', error);
        res.status(401).send({ error: 'unauthorized', error_description: 'Malformed token' });
    }
}

export { authenticate }
