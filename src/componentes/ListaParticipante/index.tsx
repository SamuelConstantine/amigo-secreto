//src/componentes/Card/index.tsx

import React from "react"
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"

const ListaParticipante = () => {

    const participante: string[] = useListaDeParticipantes()

    return (
        <ul>
            {participante.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
        
    )
}

export default ListaParticipante