//  NPM
import axios from "axios"
//  Hooks
import { useEffect, useState } from "react"
//  Types
import { IRandomUser } from "../../../../shared/types"
//  Components
import { Filter } from "./components"
//  Style
import "./users.css"

export const Users = () => {

    const [ users, setUsers ] = useState<IRandomUser[]>()
    const [ itemsPerPage, setItemsPerPage] = useState(6)
    const [ currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(Number(users?.length) / itemsPerPage)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItens = users?.slice(startIndex, endIndex)
    
    useEffect(() => {
        const randomUser = async () => {
            await axios.get("http://localhost:8080/randomUser")
            .then(res => {
                setUsers(res.data)                
            })
        }
        randomUser()
    }, [])

    return (
        <div>
            <main className="Users-container">
                <section>
                    <Filter users={users!} />

                    <div className="Users-content">
                        {currentItens && currentItens?.map(item => {
                        return (
                            <div key={item.name} className="Users-user">
                                <img src={item.picture} alt={item.name} />
                                <div>
                                    <div className="Users-user-rl">
                                        <span><strong>Nome: </strong>{item.name}</span>
                                        <span><strong>Idade: </strong>{item.age}</span>
                                    </div>
                                    <div className="Users-user-web">
                                        <span><strong>E-mail: </strong>{item.email}</span>
                                        <span><strong>Username: </strong>{item.username}</span>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                    
                    <div className="Users-container-buttons">
                        {users && Array.from(Array(pages), ((item, index) => {
                        return (
                            <button 
                                key={index} 
                                value={index} 
                                style={index === currentPage ? {color: "#1AA2A1", border: "2px solid #1AA2A1"} : {color: "#000"} }
                                onClick={ () => setCurrentPage(index) }>
                                {index + 1}
                            </button>
                        )}))}
                    </div>
                </section>
            </main>
        </div>
    )
}