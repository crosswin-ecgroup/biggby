import express from 'express'

import * as usersController from '../controllers/users.controller'

const userRouter = express.Router()

/* GET users */
userRouter.get('/', usersController.getAll)

/* GET users by id */
userRouter.get('/:id', usersController.getById)

export { userRouter }
