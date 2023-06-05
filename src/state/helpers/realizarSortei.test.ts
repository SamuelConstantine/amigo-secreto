import Sorteio from "../../componentes/Sorteio"
import { useListaDeParticipantes } from "../hook/useListaDeParticipantes"
import { realizarSoteio } from "./realizarSorteio"

describe('dado um sorteio de um amigo secreto', () => {
    test('cada participante nao soteie o proprio nome', () => {
        const participantes = [
            'Samuel',
            'Ryan',
            'Bia',
            'Gabriel',
            'Rayna',
            'Ysmeral'
        ]

        const sorteio = realizarSoteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    
    })
})