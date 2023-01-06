import React from "react"

export interface IClientListInput {
    title: string
    type: string
    value?: string | number
    placeholder?: string
    maxLength?: number
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}