import { render, screen , fireEvent} from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ListaParticipante from "./ListaParticipante";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import Rodape from "./Rodape";


jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao =  jest.fn()
const mockSorteio =  jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () =>  mockNavegacao
    }
})


jest.mock('../state/hook/useSorteador', () => {
    return {
        useSoteador: () =>  mockSorteio
    }
})


describe('aonde nao existem participantes suficienmtes', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })


    test('a brincdei nao pode comecar', () => {
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()

    })
 
})


describe('quando existem participantes suficientes', () => {
    const participante = ['samuel', 'ysmeralda', 'husky']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participante)
    })


    test('a brincadei pode comecar', () => {
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()

    })


    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)

        const botao = screen.getByRole('button')

        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        // expect(mockSorteio).toHaveBeenCalledTimes(1)

    })
 
})

