import React from 'react';
import { useSelector } from 'react-redux'

import { BiSolidUserCircle } from "react-icons/bi";
import * as S from './style'

import CardModal from '../../components/CardModal';
import ContatosDescricao from '../../models/contatoDescricao';
import { RootReducer } from '../../store/configStore';


const Card = () => {
  const listaDeContatos = useSelector((state: RootReducer) => state.contatos.ListaDeContatos)

  const [contatoSelecionado, setContatoSelecionado] = React.useState<ContatosDescricao | null>(null)

  const abrirModal = (contato: ContatosDescricao) => {
    setContatoSelecionado(contato)
  }

  const fecharModal = () => {
    setContatoSelecionado(null)
  }

  return (
    <S.Container>
        {listaDeContatos.map((contato) => (
          <li key={contato.id}>
              <S.ContainerCard onClick={() => abrirModal(contato)}>
                <BiSolidUserCircle />
                <h1>{contato.nome}</h1>
              </S.ContainerCard>
          </li>
        ))}
        {contatoSelecionado && (
          <CardModal isOpen={true} contato={contatoSelecionado} fecharModal={fecharModal}/>
        )}
      </S.Container>
  )
}

export default Card