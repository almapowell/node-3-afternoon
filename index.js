require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = products_controller

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})
.catch(err => console.log(err))

app.use(express.json())

app.post('./api/products',)



app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))