//  NPM
import mongoose from "mongoose";
//  Configuration
const Schema = mongoose.Schema
//  Schema
const Client = new Schema ({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "users",
        require: true,
    }
})
mongoose.model("clients", Client)
