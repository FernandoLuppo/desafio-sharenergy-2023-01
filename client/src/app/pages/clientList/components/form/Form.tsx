//  NPM
import axios from "axios"
//  Hooks
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
//  Context
import { AuthContext } from "../../../../shared/context"
//  Types
import { IClientList } from "../../../../shared/types"
//  Components
import { Input } from "../../../../shared/components"
//  Style
import "./form.css"

export const Form = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const _id = auth.user?._id

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ address , setAddress ] = useState("")
    const [ cpf , setCpf ] = useState("")
    const [ clients, setClients ] = useState<IClientList[]>()

    //  Get the initial list
    useEffect(() => {
        const getClientList = async () => {
            await axios.get(`http://localhost:8080/clientList/${_id}`)
            .then(res => setClients(res.data))
           
        }
        getClientList()
    }, [_id])
    
    //  Add and bring the new client
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
            await axios.post("http://localhost:8080/newClient",{
                name, email, phone, address, cpf, _id
            })
            .then(res => setClients(res.data))
            
            setName("")
            setEmail("")
            setPhone("")
            setAddress("")
            setCpf("")
        }
    }    
    
    return (
        <div>
            <div className="Form-container-inputs">
                <h1>Cadastre um novo Cliente:</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <div>
                        <div>
                            <Input value={name} onChange={e => setName(e.target.value)} title="Nome:" required />
                            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} title="E-mail:" required />
                        </div>
                        <div>
                            <Input mask="phone" value={phone} onChange={e => setPhone(e.target.value)} title="Telefone:" required />
                            <Input value={address} onChange={e => setAddress(e.target.value)} title="Endereço:" required />
                        </div>
                        <div>
                            <Input mask="cpf" value={cpf} onChange={e => setCpf(e.target.value)} title="CPF:" required />
                            <button onClick={handleClick}>Criar novo Cliente</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="Form-container-list">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients && clients.map((client, index) => {

                            const handleRemove = async () => {
                                let id = client._id
                                await axios.delete(`http://localhost:8080/clientList/delete/${id}`)
                                .then(() => window.location.reload())
                            }

                            const handleEdit = () => {
                                navigate(`/clientList/edit/${client._id}`)
                            }

                            return (                
                                <tr key={index}>
                                    <td>{client.name}</td>
                                    <td>{client.address}</td>
                                    <td>{client.email}</td>
                                    <td>{client.phone}</td>
                                    <td>{client.cpf}</td>
                                    <td><button onClick={handleEdit} className="Form-edit">Editar</button></td>
                                    <td><button onClick={handleRemove} className="Form-remove">Remover</button></td>
                                </tr>
                            )})}
                    </tbody>
                </table>
            </div>
        </div>
    )
}