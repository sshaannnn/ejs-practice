const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('1234')
})

app.get('/user/:name', (req, res) => {
    const name = req?.params?.name
    const limit = req?.query?.limit // /?limit=xx
    console.log(limit)
    res.send('1234')
})

const port = process.env.PORT || 3000
app.listen(port)