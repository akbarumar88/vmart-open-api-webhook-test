import express from "express"
import dotenv from "dotenv"
import requestIP from "request-ip"

dotenv.config()

var app = express()

import cors from "cors"
import { empty } from "./helper/function.js"
import moment from "moment"

app.use(cors()) // Use this after the variable declaration
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})

app.get("/", async (req, res, next) => {
  // console.log(req.query)
  res.json({
    message: `Server running on Port: ${PORT}`,
  })
})

app.post("/webhook", async (req, res, next) => {
  // console.log(req.query)
  let tgl = moment().format("YYYY-MM-DD")
  try {
    console.log(`Params ${tgl}`, req.body)
    res.json(req.body)
  } catch (e) {
    res.status(500)
    res.json({
      data: [],
      pageCount: 0,
      dataCount: 0,
      errorMessage: e.message,
      error: e,
    })
  }
})
