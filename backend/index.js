// importing express
const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()

const server = express()

server.use(express.json())

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

const studentRoutes = require("./Routes/usersRoutes")
const authRoutes = require("./Routes/authRoutes")

server.use(studentRoutes)
server.use(authRoutes)



mongoose.connect(MONGODB_URL, { serverSelectionTimeoutMS: 10000 })
    .then(() => {
        console.log("MongoDB connected successfully")
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message)
    })

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err.message)
})

mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected")
})

server.listen(PORT, () => {
    console.log(`My server has started successfully on port ${PORT}`)
})
