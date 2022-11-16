import { Request, Response } from 'express'

import * as usersService from '../services/users.service'

const getAll = async (req: Request, res: Response) => {
    try {
        const users = await usersService.getAll();
        res.status(200).send(users);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}

const getById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const user = await usersService.getById(userId);
        res.status(200).send(user);
    } catch (e: any) {
        res.status(500).send('Something went wrong!');
    }
}

const deleteById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        await usersService.deleteById(userId);
        res.status(200).send(`${userId} is deleted successfully!`);
    } catch (e: any) {
        res.status(500).send('Something went wrong!');
    }
}

export { getAll, getById, deleteById }
