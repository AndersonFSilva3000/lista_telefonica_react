import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import ContatosDescricao from '../../models/contatoDescricao'

type Contatos = {
  ListaDeContatos: ContatosDescricao[]
}

const initialState : Contatos = {
  ListaDeContatos: [
    {
      id: 1,
      nome: 'Anderson Silva',
      numero: '(11) 91234-5678',
      email: 'anderson@teste.com'
    },
    {
      id: 2,
      nome: 'Vinicius de Souza',
      numero: '(11) 91234-5678',
      email: 'vinicius@teste.com'
    },
    {
      id: 3,
      nome: 'Pedro Henrique',
      numero: '(11) 91234-5678',
      email: 'pedro@teste.com'
    },
  ]
}

const constatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.ListaDeContatos = state.ListaDeContatos.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<ContatosDescricao>) => {
      const indexDoContato = state.ListaDeContatos.findIndex((c) => c.id === action.payload.id)

      if(indexDoContato >= 0) {
        state.ListaDeContatos[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<ContatosDescricao, 'id'>>) => {
      const cadastroJaExistente = state.ListaDeContatos.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if(cadastroJaExistente) {
        alert('Contato existente com esse nome.')
      } else {
        const ultimoCadastro = state.ListaDeContatos[state.ListaDeContatos.length - 1]

        const contatoNova = {
          ...action.payload,
          id: ultimoCadastro ? ultimoCadastro.id + 1 : 1
        }

        state.ListaDeContatos.push(contatoNova)
      }
    }
  }
})

export default constatosSlice.reducer

export const {editar, remover, cadastrar} = constatosSlice.actions