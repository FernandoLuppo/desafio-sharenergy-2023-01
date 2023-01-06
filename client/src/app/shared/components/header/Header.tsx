//  NPM
import { Link, useNavigate } from "react-router-dom"
//  Hooks
import { useContext } from "react"
//  Context
import { AuthContext } from "../../context"
//  Style
import "./header.css"

export const Header = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const toggleMenu = () => {
        const nav = document.querySelector(".Header-nav")
        nav?.classList.toggle("active")
    }

    const handleLogout = () => {
        auth.logout()
        navigate("/login")
    }

    return (
        <header className="Header-container">
            <nav>
                <img src={require("../../images/logo.png")} alt="logo" className="Header-logo" />
                <div className="Header-nav">
                    <button className="Header-btn-mobile" onClick={toggleMenu}>
                        <span className="Header-hamburger"></span>
                    </button>
                    <ul className="Header-menu">
                        <li><Link to="/" className="Header-link">Home</Link></li>
                        <li><Link to="/httpCat" className="Header-link">HTTP Cat</Link></li>
                        <li><Link to="/randomDog" className="Header-link">Random Dog</Link></li>
                        <li><Link to="/clientList" className="Header-link">Client List</Link></li>
                        <li className="Header-link" onClick={handleLogout}>Sair</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}