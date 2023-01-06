//  NPM
import { Request, Response } from "express"
import mongoose from "mongoose"
//  Banc
import "../models/User"
import "../models/Client"
const User = mongoose.model("users")
const Client = mongoose.model("clients")
//  Types
import { IClientList } from "../types"

export const clientListController = {
    //  Add new client
    newClient: async (req: Request, res: Response) => {
        const { name, email, phone, address, cpf, _id }: IClientList = req.body

        //  Validation
        const errors = [""]
        //  Name
        if (name === "" || name === null || name === undefined || name.length < 3) {
            errors.push("Erro: O campo nome não pode estar vazio e deve conter mais que 3 caracteres")
        }
        //  Email
        if (email === "" || email === null || email === undefined || email.length < 9) {
            errors.push("Erro: O campo senha não pode estar vazio e deve conter mais que 9 caracteres")
        }
        //  Phone
        if (phone === "" || phone === null || phone === undefined || phone.length !== 15) {
            errors.push("Erro: O campo senha não pode estar vazio e deve conter 15 caracteres")
        }
        //  Address
        if (address === "" || address === null || address === undefined) {
            errors.push("Erro: O campo senha não pode estar vazio")
        }
        //  CPF
        if (cpf === "" || cpf === null || cpf === undefined || cpf.length !== 14) {
            errors.push("Erro: O campo senha não pode estar vazio e deve conter 14 caracteres")
        }

        if(errors.length > 1) {
            res.status(400).send(errors)
        } else {
            await User.findById(_id)
            .then(() => {
                const newClient = {
                    name, email, phone, address, cpf, client: _id
                }
                new Client(newClient)
                .save()
                .then(() => {
                    Client.find({client: _id})
                    .then(clients => res.status(200).send(clients))
                    .catch(error => res.status(400).send(error))
                })
                .catch((error: string) => res.status(400).send(error))
            })
            .catch((error: string) => res.status(400).send(error))
        }
    },

    //  Clients List
    clientList: async (req: Request, res: Response) => {
        const _id = req.params.id                   

        await Client.find({client: _id})
        .then(clients => {              
            res.status(200).send(clients)
        }).catch(error => res.status(400).send(error))
    },

    //  Get the client that will be edited
    clientListEdit: async (req: Request, res: Response) => {
        const _id = req.params.id

        await Client.findById(_id)
        .then(clients => {                          
            res.status(200).send(clients)
        }).catch(error => res.status(400).send(error))
    },

    //  Get the client that will be edited
    newClientListEdit: async (req: Request, res: Response) => {
        const { name, email, phone, address, cpf, _id } = req.body

        //  Validation
        const errors = [""]
        //  Name
        if (name === "" || name === null || name === undefined || name.length < 3) {
            errors.push("Erro: O campo nome não pode estar vazio e deve conter mais que 3 caracteres")
        }
        //  Email
        if (email === "" || email === null || email === undefined || email.length < 9) {
            errors.push("Erro: O campo senha não pode estar vazio e deve conter mais que 9 caracteres")
        }
        //  Phone
        if (phone === "" || phone === null || phone === undefined || phone.length !== 15) {
            errors.push("Erro: O campo senha não pode estar vazio e deve conter 15 caracteres")
        }
        //  Address
        if (address === "" || address === null || address === undefined) {
            errors.push("Erro: O campo senha não pode estar vazio")
        }
        //  CPF
        if (cpf === "" || cpf === null || cpf === undefined || cpf.length !== 14) {
            errors.push("Erro: O campo senha não pode estar vazio e deve conter 14 caracteres")
        }

        if(errors.length > 1) {
            res.status(400).send(errors)
        } else {

            await Client.findById(_id)
            .then(client => {
                client.name = name
                client.email = email
                client.phone = phone
                client.address = address
                client.cpf = cpf

                client.save()
                .then(() => res.status(200).send(console.log("Client editado com sucesso")))
                .catch((error:string) => res.status(400).send(console.log(error)))
            }).catch((error:string) => res.status(400).send(console.log(error)))
        }
    },
    //  Delete client
    ClientListDelete: async (req: Request, res: Response) => {
        let id = req.params.id

        Client.deleteOne({_id: id})
        .then(() => {
            res.status(200).send("Usuário deletado com sucesso")
        }).catch(error => res.status(400).send(error))
    }
}
export default clientListController