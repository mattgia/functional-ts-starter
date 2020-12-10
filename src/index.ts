import Express from 'express'
import { routeHandler } from './routes'

const app: Express.Application = Express()

export default app.get('/test', (req, res) => {
    return res.send(routeHandler('world'))
}).listen(3000)