const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 5000

const cors = require('cors')
app.use(cors())

app.use(express.json())  //middleware to get data


//Available routes
app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://127.0.0.1:${port}`)
})