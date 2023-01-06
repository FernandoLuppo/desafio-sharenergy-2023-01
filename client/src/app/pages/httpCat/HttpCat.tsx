//  Hooks
import { useState } from "react"
//  Modules
import { Footer, Header } from "../../shared/components"
//  Style
import "./httpCat.css"

export const HttpCat = () => {

    const [ cat, setCat ] = useState("")
    
    const httpCat = () => {
        if (cat === "" || cat === null || cat === undefined) {
            alert("O campo de pesquisa não pode estar vazio")
        } else {
            window.location.href = `https://http.cat/${cat}`
        }
    }

    return (
        <div>
            <Header />
            <main className="HttpCat-container">
                <section>
                    <div>
                        <h1>Escolha um http status</h1>
                        <p>Exemplos de http status: 102, 200, 308, 400...</p>
                        <input type="number" value={cat} placeholder="Escolha um status..." onChange={e => setCat(e.target.value)} />
                        <button onClick={httpCat}>Enviar</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}