//  NPM
import axios from "axios"
import { useNavigate } from "react-router-dom"
//  Hooks
import { useState } from "react"
//  Components
import { Footer, HeaderLoggedOut } from "../../shared/components"
//  Style
import "./register.css"

export const Register = () => {

    const navigate = useNavigate()

    const [ name, setName ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleRegister = async () => {
        if(name === "" || name === null || name === undefined || name.length < 3) {
            alert("Campo nome não pode estar vazio e deve conter mais que 3 caracteres")
        } else if (password === "" || password === null || password === undefined || password.length < 3) {
            alert("Campo Senha não pode estar vazio e deve conter mais que 3 caracteres")
        } else {
            await axios.post("http://localhost:8080/register", {name, password})
            .then(res => {
                if (res.data.message) navigate("/login")
            }).catch(() => alert("Usuário já cadastrado"))
        }
    }

    return (
        <div>
            <HeaderLoggedOut />
                <main className="Register-container">
                    <section>
                        <h1>Register</h1>
                        <div>
                            <h3>Nome:</h3>
                            <input type="text" name="name" onChange={((e) => setName(e.target.value))} />
                        </div>
                        <div>
                            <h3>Senha:</h3>
                            <input type="password" name="password" onChange={((e) => setPassword(e.target.value))} />
                        </div>
                        <div>
                            <button onClick={handleRegister}>Registrar</button>
                        </div>
                    </section>
                </main>
            <Footer />
        </div>
    )
}