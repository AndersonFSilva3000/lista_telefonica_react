import React from 'react'

import CadastroModal from '../../components/CadastroModal'

import * as S from './style'
import { BsPersonFillAdd, BsBookHalf } from 'react-icons/bs'

const Header = () => {
  const [modalAberto, setModalAberto] = React.useState(false)

  const abrirModal = () => {
    setModalAberto(true);
  };

  const sairDoModal = () => {
    setModalAberto(false)
  }

  return (
    <S.Header>
      <S.ContainerTitulo>
        <BsBookHalf /> 
        <S.Titulo>Lista de Contatos</S.Titulo>
      </S.ContainerTitulo>

      <S.AddContato onClick={abrirModal}>
        <BsPersonFillAdd />Adicionar Contato
      </S.AddContato>

      {modalAberto && <CadastroModal isOpen={modalAberto} fecharModal={sairDoModal} />}
    </S.Header>
  )
}

export default Header