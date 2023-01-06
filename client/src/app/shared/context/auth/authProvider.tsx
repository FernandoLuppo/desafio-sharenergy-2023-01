//  NPM
import axios from "axios"
//  Hooks
import { useState, useEffect } from "react"
//  Context
import { AuthContext } from "./authContext"
//  Types
import { ILogin } from "../../types"

//  Route validator
export const AuthProvider = ({ children }: { children:JSX.Element }) => {
    const [user, setUser] = useState<ILogin | null>(null)

    //  Checks if the user has already logged in through localStorage, if he has already done so, the routes are released
    useEffect(() => {
        const validateId = async () => {
            const storageData = localStorage.getItem("authId")
            const response = await axios.post(`http://localhost:8080/localStorage/`, {storageData})   

            if(storageData) {
                if(response.data) {
                    setUser(response.data)
                }
            }
        }
        validateId()
    }, [])

    //  send the user information to bank for validation and release routes
    const login = async (name: string, password: string) => {        
        const response = await axios.post("http://localhost:8080/login", {name, password})

        if(response.data._id) {
            setUser(response.data)
            setId(response.data._id)
            return true
        } else {
            console.log("ola");
            alert("Senha ou usuário incorreto")            
            return false
        }
    }

    //  Do logout
    const logout = async () => {
        setUser(null)
        setId("")
    }

    //  Define user information in localStorage to release routes 
    const setId = (id: string) => {
        localStorage.setItem("authId", id)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}