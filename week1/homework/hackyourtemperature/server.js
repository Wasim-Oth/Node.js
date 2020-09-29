const express = require ('express')
const fs = require ('fs')
const app = express()

app.get('/', (req, res) =>{
    res.end('hello from backend to frontend!')
})

const PORT = process.env.PORT || 3000
app.listen (PORT, () => console.log(`server is running: http://localhost:${PORT}`))