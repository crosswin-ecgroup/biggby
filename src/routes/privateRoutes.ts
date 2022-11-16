import { Express } from "express";
import { userRouter } from "../modules/user/routers/users.router";
import { authenticate } from "../core/middleware";

const initializePrivateRoute = ((server: Express) => {
    server.use('/user', authenticate, userRouter);
});

export { initializePrivateRoute }
