import "./header.css"
import kenzieLogo from "../Header/kenzieLogo.png"
import { Button } from "../Button"
import { useState } from "react"

export const Header = ({ setSearch }) => {

    const [valueInput, setValueInput] = useState("")

    return (
        <header>
            <img src={kenzieLogo} alt="Logo Hamburgueria Kenzie" />

            <form onSubmit={(event) => { event.preventDefault() }}>
                <input type="text" placeholder="Digitar Pesquisa" onChange={(event) => setValueInput(event.target.value)} value={valueInput} />
                <Button className="search" onClick={() => setSearch(valueInput)}>Pesquisar</Button>
            </form>

        </header>
    )
}

