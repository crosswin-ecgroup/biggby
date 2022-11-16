import { Request, Response } from 'express'

import * as ordersService from '../services/orders.service'
import { IOrder } from "../interface/orders";

const getAll = (req: Request, res: Response) => {
    try {
        const orders: IOrder[] = ordersService.getAll();
        res.status(200).send(orders);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}

const getOrderById = (req: Request, res: Response) => {
    try {
        const orderId = req.params.orderId;
        const orderDetails: IOrder | undefined = ordersService.getOrderById(orderId);
        if (orderDetails) {
            res.status(200).send(orderDetails);
        } else {
            res.status(400).send('order not found');
        }

    } catch (e: any) {
        res.status(500).send(e.message);
    }
}

const insertOrder = async (req: Request, res: Response) => {
    try {
        const orderDetails: IOrder = req.body;
        ordersService.insertOrder(orderDetails);
        if (orderDetails) {
            res.status(200).send(orderDetails);
        } else {
            res.status(400).send('order not found');
        }

    } catch (e: any) {
        res.status(500).send(e.message);
    }
}


export { getAll, getOrderById, insertOrder }
