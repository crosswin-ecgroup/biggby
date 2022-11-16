import express from 'express'

import * as usersController from '../controllers/users.controller'

const userRouter = express.Router()

userRouter.get('/', usersController.getAll)
userRouter.get('/:userId', usersController.getById)
userRouter.delete('/:userId', usersController.deleteById)

export { userRouter }
