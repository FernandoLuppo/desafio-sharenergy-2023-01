//  NPM
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
//  Hooks
import { useContext, useState } from "react"
//  Context
import { AuthContext } from "../../shared/context"
//  Components
import { Footer, HeaderLoggedOut } from "../../shared/components"
//  Style
import "./login.css"

export const Login = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [ name, setName ] = useState("")
    const [ password, setPassword ] = useState("")

    //  Checks if the name and password values match the database, if match releases user access
    const handleLogin = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        if(name === "" || name === null || name === undefined || name.length < 3) {
            alert("Campo nome não pode estar vazio e deve conter mais que 3 caracteres")
        } else if (password === "" || password === null || password === undefined || password.length < 3) {
            alert("Campo Senha não pode estar vazio e deve conter mais que 3 caracteres")
        } else {
            const isLogged = await auth.login(name, password).catch(() => alert("Nome ou senha incorreto") )
            if (isLogged === true) navigate("/")
            
        }
    }

    return (
        <div>
            <HeaderLoggedOut />
                <main className="Login-container">
                    <section>
                        <h1>Login</h1>
                        <div>
                            <h3>Nome:</h3>
                            <input type="text" name="name" onChange={((e) => setName(e.target.value))} />
                        </div>
                        <div>
                            <h3>Senha:</h3>
                            <input type="password" name="password" onChange={((e) => setPassword(e.target.value))} />
                        </div>
                        <div>
                            {auth.user ? <Link to="/" className="Login-autoLogin"><button>Entrar Automaticamente</button></Link> : <button onClick={handleLogin}>Entrar</button>}
                        </div>
                        <div className="Login-register-button">
                            <Link to="/register">Registrar</Link>
                        </div>
                    </section>
                </main>
            <Footer />
        </div>
    )
}