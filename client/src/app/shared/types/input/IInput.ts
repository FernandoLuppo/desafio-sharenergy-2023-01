import { InputHTMLAttributes } from "react"

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    mask?: "phone" | "cpf"
    title: string
}