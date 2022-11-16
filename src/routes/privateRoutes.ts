import { Express } from "express";
import { userRouter } from "../modules/user/routers/users.router";
import { authenticate } from "../core/middleware";
import { orderRouter } from "../modules/order/routers/orders.router";

const initializePrivateRoute = ((server: Express) => {
    server.use('/user', authenticate, userRouter);
    server.use('/order', authenticate, orderRouter);
});

export { initializePrivateRoute }
