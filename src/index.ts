
import Express from 'express'

const app: Express.Application = Express()

export default app.get('/test', (req, res) => {
    return res.send({})
}).listen(3000)