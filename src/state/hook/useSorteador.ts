import shuffle from "just-shuffle"
import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { resultadoDoAmigoSecreto } from "../atom"
import { useSetRecoilState } from "recoil"
import { realizarSoteio } from "../helpers/realizarSorteio"

export const useSorteador = () => {
    const participantes = useListaDeParticipantes()

    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)

    return () => {
        const resultado = realizarSoteio(participantes)
        setResultado(resultado)
    }

}