const express = require('express')
const app = express()

const login = ((req, res, next) => {
    const url = req?.url
    if (url !== '/') {
        console.log('not /')
        next()
    } else {
        res.send('cool')
    }
})

app.get('/', login, (req, res) => {
    res.send('1234')
})

app.get('/user/:name', (req, res) => {
    const name = req?.params?.name
    const limit = req?.query?.limit // /?limit=xx
    console.log(limit)
    res.send('1234')
})


app.use((req, res, next) => {
    res.status(404).send('404')
})

app.use((err, req, res, next) => {
    res.status(500).send('error')
    // console.error(err.stack)
})


const port = process.env.PORT || 3000
app.listen(port)