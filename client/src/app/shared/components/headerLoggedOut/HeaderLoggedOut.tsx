//  Style
import "./headerLoggedOut.css"

export const HeaderLoggedOut = () => {
    return (
        <header className="HeaderLoggedOut-container">
            <img src={require("../../images/logo.png")} alt="logo" className="HeaderLoggedOut-logo" />
        </header>
    )
}