//  Components
import { Footer, Header } from "../../shared/components"
//  Style
import "./randomDog.css"

export const RandomDog = () => {

    const handleClick = () => {
        window.location.href = "https://random.dog"
    }

    return (
        <div>
            <Header />
            <main className="RandomDog-container">
                <section>
                    <h1>API Random Dog</h1>
                    <p>Clique no botão abaixo para carregar uma página com um cachorro aleatório</p>
                    <button onClick={handleClick}>Refresh</button>
                </section>
            </main>
            <Footer />
        </div>
    )
}