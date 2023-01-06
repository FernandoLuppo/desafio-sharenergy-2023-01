//  NPM
import axios from "axios"
import { Request, Response } from "express"
//  Types
import { IRandomUser } from "../types"

//  Fetch API Random User Generator
export const randomUserController = {
    randomUser: async (req: Request, res:Response ) => {

        await axios.get("https://randomuser.me/api/?results=20")
        .then(user => {
            let data = user.data.results
            let userBanc: {}[]  = []
            data.map((item: IRandomUser) => {

                let user = {
                    name: item.name.first + " " + item.name.last,
                    email: item.email,
                    age: item.dob.age,
                    username: item.login.username,
                    picture: item.picture.thumbnail
                }
                userBanc.push(user)
            })
            res.status(200).send(userBanc)
        })
        .catch(error => res.status(400).send(error))
    }
}
export default randomUserController