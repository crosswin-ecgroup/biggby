import { Express, Request, Response } from "express";
import { userRouter } from "../modules/user/routers/users.router";

const initializePrivateRoute = ((server: Express) => {

    server.get('/', (req: Request, res: Response) => {
        res.status(200).send('Welcome')
    });

    server.use('/user', userRouter);
});

export { initializePrivateRoute }
