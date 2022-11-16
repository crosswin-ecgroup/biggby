import express, { Express, Request, Response } from 'express'
import 'dotenv/config'

// import { middleware } from "./core/middleware";
import { initializePrivateRoute } from "./routes/privateRoutes";
import { initializePublicRoute } from './routes/publicRoutes';

const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'production'

const server: Express = express()

server.use(express.json())

// server.use(middleware);

server.get('/', (req: Request, res: Response) => {
    res.status(200).send('Welcome')
});

initializePrivateRoute(server);
initializePublicRoute(server);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${ENV} environment`)
})

