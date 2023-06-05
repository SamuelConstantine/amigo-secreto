import { useRecoilValue } from "recoil"
import { erroState,  } from "../atom"

export const useErroMensagem = () => {
     const mensagem = useRecoilValue(erroState)
     return mensagem  
}

