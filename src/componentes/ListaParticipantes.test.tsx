import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ListaParticipante from "./ListaParticipante";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";


jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('uma lista vazuia de participantes', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipante/>
        </RecoilRoot>)
    
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
 
})

describe('prenchida lista', () => {

    const participante = ['samuel', 'ysmeralda']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participante)
    })

    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipante/>
        </RecoilRoot>)
    
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participante.length)
    })
 
})