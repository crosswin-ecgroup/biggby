import { Express, Request, Response } from "express";
import { authRouter } from "../modules/authentication/routers/auth.router";

const initializePublicRoute = ((server: Express) => {
    server.use('/auth', authRouter);
});

export { initializePublicRoute }
