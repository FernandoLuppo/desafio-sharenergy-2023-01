import { ILogin } from "../login/ILogin"

export interface IAuthContextType {
    user: ILogin | null
    login: (name: string, _id: string) => Promise<boolean> 
    logout: () => void
}