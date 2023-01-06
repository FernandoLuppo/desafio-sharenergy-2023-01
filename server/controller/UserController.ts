//  NPM
import { Request, Response } from "express"
import bcryptjs from "bcryptjs"
import mongoose from "mongoose"
//  Banc
import "../models/User"
const User = mongoose.model("users")
//  Types
import { ILogin } from "../types"

//  Login Validation
const userController = {
    register: (req: Request, res: Response) => {
        let encrypted = bcryptjs.genSaltSync(10)
        const { name, password }: ILogin = req.body

        //  Validation
        const errors = [""]
        //  Name
        if(name === "" || name === null || name === undefined || name.length < 3) {
            errors.push("Erro: O campo nome não pode estar vazio e deve conter mais que 3 caracteres")
        }
        //  Password
        if(password === "" || password === null || password === undefined || password.length < 3) {
            errors.push("Erro: O campo senha não pode estar vazio e deve conter mais que 3 caracteres")
        }

        if(errors.length > 1) {
            res.status(400).send(errors)
        } else {
            const newUser = {
                name, 
                password: bcryptjs.hashSync(password, encrypted)
            }
            new User(newUser)
            .save()
            .then(() => res.status(200).send("Usuário cadastrado com sucesso"))
            .catch((error: string) => res.status(400).send(error))
        }
    },

    login: (req: Request, res: Response) => {
        const { name, password }: ILogin = req.body
        
        //  Validation
        const errors = [""]
        //  Name
        if(name === "" || name === null || name === undefined || name.length < 3) {
            errors.push("Erro: O campo nome não pode estar vazio e deve conter mais que 3 caracteres")
        }
        //  Password
        if(password === "" || password === null || password === undefined || password.length < 3) {
            errors.push("Erro: O campo senha não pode estar vazio e deve conter mais que 3 caracteres")
        }

        //  If have some error send it, otherwise release the routes to the user
        if(errors.length > 1) {
            res.status(400).send(errors)
        } else {
            User.findOne({name: name})
            .then(data => {
                bcryptjs.compare(password, data.password, (error, key) => {
                    if(key === true) {
                        const { name, _id }: ILogin = data
                        const user = { name, _id }
    
                        res.status(200).send(user)
                    } else {
                        res.status(400).send("bad request")
                    }

                    
                })
            })
            .catch(error => res.status(200).send(error))
        }
    },

    //  Check the frontend information to perform the localStorage feature
    localStorage: async (req: Request, res: Response) => {
        let id = req.body.storageData 

        await User.findOne({_id: id})
        .then(data => {                        
            res.status(200).send(data)
        })
        .catch(error => res.status(200).send(error))
    }
}
export default userController