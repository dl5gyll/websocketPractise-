const express = require('express')
const app = express()


app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})



const port = 5000
const server = app.listen(port, ()=> {
    console.log(`server started on Port ${server.address().port} visit
    http://localhost:${server.address().port}/ to see it`)
})