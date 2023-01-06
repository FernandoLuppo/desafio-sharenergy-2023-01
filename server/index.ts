//  NPM
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
//  Routes
import pages from "./routes/pages"

//  Configurations
const PORT = 8080

const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost/sharenergy")
.then(() => console.log("Connected with Successful"))
.catch(error => console.log("There was an error to try connect with server " + error))

app.use(cors())

//  Routes
app.use("/", pages)

app.listen(PORT, () => console.log("Server running on port " + PORT))