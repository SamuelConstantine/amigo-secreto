import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";


describe('Comportamento do formulario.tsx', () => {

    test('Quando o input esta vvazio, novos particiapan nao podem ser adicionados', () => {

        render(<RecoilRoot> <Formulario /></RecoilRoot>)
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        const botao = screen.getByRole('button')
    
        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })
    
    test('Adicionar um participante', () => {
        
        render(<RecoilRoot> <Formulario /></RecoilRoot>)
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        const botao = screen.getByRole('button')
    
        fireEvent.change(input, { target: { value: 'SAMUEL COSNTAINO'}})
    
        fireEvent.click(botao)
     
        expect(input).toHaveFocus()
    
        expect(input).toHaveValue("")
    
    })
    
    test('nao deixar duplicar os nome', () => {
        render(<RecoilRoot> <Formulario /></RecoilRoot>)
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        const botao = screen.getByRole('button')
    
        fireEvent.change(input, { target: { value: 'SAMUEL COSNTAINO'}})
        fireEvent.click(botao)
    
        fireEvent.change(input, { target: { value: 'SAMUEL COSNTAINO'}})
        fireEvent.click(botao)
    
        const mensagemDeErro = screen.getByRole('alert')
    
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados nao sao permitidos')
    
    })
    
    test('sumir erro em 3 segundos', () => {
        jest.useFakeTimers()
        render(<RecoilRoot> <Formulario /></RecoilRoot>)
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        const botao = screen.getByRole('button')
    
        fireEvent.change(input, { target: { value: 'SAMUEL COSNTAINO'}})
        fireEvent.click(botao)
    
        fireEvent.change(input, { target: { value: 'SAMUEL COSNTAINO'}})
        fireEvent.click(botao)
    
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
    
        act(() => {
            jest.runAllTimers()
          });
    
    
        mensagemDeErro = screen.queryByRole('alert')
    
        expect(mensagemDeErro).toBeNull()
    
    })

})

