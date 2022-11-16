import { userRouter } from "./users.router";
import { Express, Request, Response } from "express";

const routes = ((server: Express) => {

    server.get('/', (req: Request, res: Response) => {
        res.status(200).send('Welcome')
    });

    server.use('/user', userRouter);
});

export { routes }
