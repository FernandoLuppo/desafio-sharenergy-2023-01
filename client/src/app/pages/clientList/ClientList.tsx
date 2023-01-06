//  Components
import { Form } from "./components"
import { Footer, Header } from "../../shared/components"
//  Style
import "./clientList.css"

export const ClientList = () => {

    return (
        <div>
            <Header />
            <main className="ClientList-container">
                <section>
                    <Form />
                </section>
            </main>
            <Footer />
        </div>
    )
}