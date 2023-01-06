//  Hooks
import React from "react"
//  Types
import { IInput } from "../../types"
//  Components
import { phone, cpf } from "./masks"
//  Style
import "./input.css"

export const Input = ({mask, title, ... props}: IInput) => {

    const handleKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
        if (mask === "phone") {
            phone(e)
        }
        if (mask === "cpf") {
            cpf(e)
        }
    }

    return (
        <div className="Input-container">
            <h3>{title}</h3>
            <input {... props} onKeyUp={handleKeyUp} />
        </div>
    )
}