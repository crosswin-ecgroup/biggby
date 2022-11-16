import express from 'express'

import * as ordersController from '../controllers/orders.controller'

const orderRouter = express.Router();

orderRouter.get('/', ordersController.getAll);
orderRouter.post('/', ordersController.insertOrder);
orderRouter.get('/:orderId', ordersController.getOrderById);

export { orderRouter }
