var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('1234')
})

var port = process.env.PORT || 3000
app.listen(port)