import express from 'express'

import * as authController from '../controllers/auth.controller'

const authRouter = express.Router()

authRouter.post('/login', authController.login)
authRouter.post('/forgetPassword', authController.forgetPassword)

export { authRouter }
