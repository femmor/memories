import express from "express"
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()

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

// MongoDB connect