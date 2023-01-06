//  NPM
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IconContext } from "react-icons";
//  Style
import "./footer.css"

export const Footer = () => {
    return (
        <IconContext.Provider value={{color: "#fff", size: "45px"}}>
            <footer className="Footer-container">
                <ul>
                    <li> <AiFillGithub onClick={() => window.location.href="https://github.com/FernandoLuppo"} /> </li>
                    <li> <AiFillLinkedin onClick={() => window.location.href="https://www.linkedin.com/in/fernando-luppo-331496203/"} /> </li>
                </ul>
                <span>Fernando Luppo &copy; 2022</span>
            </footer>
        </IconContext.Provider>
    )
}