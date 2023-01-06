//  NPM
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
//  Hooks
import { useEffect, useState } from "react"
//  Types
import { IClientList } from "../../shared/types"
//  Components
import { Footer, Header, Input } from "../../shared/components"
//  Style
import "./clientListEdit.css"

export const ClientListEdit = () => {

    const params = useParams()
    const navigate = useNavigate()
    let _id = params.id

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ address , setAddress ] = useState("")
    const [ cpf , setCpf ] = useState("")
    const [ client, setClient ] = useState<IClientList>()

    useEffect(() => {
        const getClient = async () => {
            await axios.get(`http://localhost:8080/clientList/edit/${_id}`)
            .then(res => setClient(res.data))
        }
        getClient()
    }, [_id])

    const handleClick = async () => {
        if (name === "" || name === null || name === undefined || name.length < 3) {
            alert("Campo nome não pode estar vazio e deve conter mais que 3 caracteres")
        } else if (email === "" || email === null || email === undefined || email.length < 9) {
            alert("Campo email não pode estar vazio e deve conter mais que 9 caracteres")
        } else if (phone === "" || phone === null || phone === undefined || phone.length !== 15) {
            alert("Campo Telefone não pode estar vazio e deve conter 15 caracteres")
        } else if (address === "" || address === null || address === undefined) {
            alert("Campo Endereço não pode estar vazio")
        } else if (cpf === "" || cpf === null || cpf === undefined || cpf.length !== 14) {
            alert("Campo CPF não pode estar vazio e deve conter 14 caracteres")
        } else {
            await axios.put("http://localhost:8080/clientList/edit", {
                name, email, phone, address, cpf, _id
            }).then(() => navigate("/clientList"))
        }
    }

    return (
        <div>
            <Header />
            {client && (
                <div className="ClientListEdit-container">
                    <section>
                        <h1>Cadastre um novo Cliente:</h1>
                        <form onSubmit={e => e.preventDefault()}>
                            <div>
                                <div>
                                    <Input onChange={e => setName(e.target.value)} title="Nome:" required />
                                    <Input type="email" onChange={e => setEmail(e.target.value)} title="E-mail:" required />
                                </div>
                                <div>
                                    <Input mask="phone" onChange={e => setPhone(e.target.value)} title="Telefone:" required />
                                    <Input onChange={e => setAddress(e.target.value)} title="Endereço:" required />
                                </div>
                                <div>
                                    <Input mask="cpf" onChange={e => setCpf(e.target.value)} title="CPF:" required />
                                    <button onClick={handleClick}>Criar novo Cliente</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            )}
            <Footer />
        </div>
    )
}