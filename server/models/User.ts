//  NPM
import mongoose from "mongoose";
//  Configuration
const Schema = mongoose.Schema
//  Schema
const User = new Schema ({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})
mongoose.model("users", User)