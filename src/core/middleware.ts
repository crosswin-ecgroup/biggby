import { Request, Response, NextFunction } from 'express'

const middleware = (req: Request, res: Response, next: NextFunction) => {
    /* Here write logic to check the authorization */

    console.log('Passing through middleware')
    next();
}

export { middleware }
