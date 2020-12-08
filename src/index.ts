
import Express from 'express'

const app: Express.Application = Express()

app.get('/test', (req, res) => {
    res.send({})
})

app.listen(3000)