import express from 'express'

import * as authController from '../controllers/auth.controller'

const authRouter = express.Router()

authRouter.get('/login', authController.login)
authRouter.get('/forgetPassword', authController.forgetPassword)

export { authRouter }
