const express = require('express')
const Controller = require('./controller')
const cors = require('cors')

let app = express()

app.use(express.json())
app.use(cors())

app.use('*', Controller)

const server = app.listen(3333, function () {
  const host = server.address().address
  const port = server.address().port

  console.log("Server listening at http://localhost:3333/")
})
