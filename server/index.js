import express from "express"
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express()

app.use('/posts', postRoutes)

// BodyParser.json
app.use(bodyParser.json({
  limit: '30mb',
  extended: true
}))

// BodyParser.urlencoded
app.use(bodyParser.urlencoded({
  limit: '30mb',
  extended: true
}))

// Cors
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://femmor2u:femmor2u@memories.zlaua.mongodb.net/memories?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

// MongoDB connect
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
.catch(error => {
  console.log(error.message)
})

mongoose.set('useFindAndModify', false)