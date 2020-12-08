
import Express from 'express'

const app: Express.Application = Express()

export default app.get('/test', (req, res) => {
    return res.send({a:1})
}).listen(3000)