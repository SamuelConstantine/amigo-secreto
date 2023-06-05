import shuffle from "just-shuffle";

export function realizarSoteio (participantes: string[]) {
    const totaldeParticipantes = participantes.length

    const embaralhado = shuffle(participantes)

    const resultado = new Map<string, string>()

    for (let index = 0; index < totaldeParticipantes; index++) {

        const indiceDoAmigo = index === (totaldeParticipantes - 1) ? 0 : index + 1;

        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])        
    }

    return resultado
}