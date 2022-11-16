import { Request, Response, NextFunction } from 'express'

const middleware = (req: Request, res: Response, next: NextFunction) => {
    /* Here check the authorization */

    console.log('Passing through middleware')
    next();
}

export { middleware }
