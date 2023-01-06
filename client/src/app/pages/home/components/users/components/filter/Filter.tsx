//  NPM
import { AiOutlineSearch } from "react-icons/ai"
//  Hooks
import { useState } from "react"
//  Types
import { IFilter } from "../../../../../../shared/types"
//  Style
import "./filter.css"

export const Filter = (props: IFilter) => {

    const [ search, setSearch ] = useState("")

    const usersBanc:string[] = []
    props.users?.map(user => {
        usersBanc.push(user.name)
        usersBanc.push(user.username)
        usersBanc.push(user.email)
        return usersBanc
    })

    const filterUsersByName = usersBanc.filter(user => {
        return user.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="Filter-container">
            <div className="Filter-search">
                <div className="Filter-searchInputs">
                    <input type="text" placeholder="Procure um usuário..." value={search} onChange={e => setSearch(e.target.value)} />
                    <div className="Filter-searchIcon"><AiOutlineSearch size={20} /></div>
                </div>
            </div>

            {search.length !== 0 && (
                <div className="Filter-dataResult">
                    {filterUsersByName && filterUsersByName.map(user => {
                        return <p>{user}</p>                          
                    })}
                </div>
            )}
        </div>
    )
}