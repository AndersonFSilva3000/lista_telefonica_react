import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';

import * as S from './style'
import { ButtonEditar, InputCardModal } from '../../styles' 
import { BiSolidUserCircle } from "react-icons/bi";
import { BsPerson , BsTelephone, BsEnvelopeAt } from "react-icons/bs";

import * as enums from '../../utils/enums/Botao'
import ContatosDescricao from '../../models/contatoDescricao';
import { editar, remover } from '../../store/reducers/contatos';
import { FormatarTelefone } from '../../utils/FormatarTelefone';

type CardModalProps = {
  isOpen: boolean
  contato: ContatosDescricao
  fecharModal: () => void
}

const CardModal = ({isOpen, contato, fecharModal}: CardModalProps ) => {
  const dispatch = useDispatch()

  const [nome, setNome] = React.useState('')
  const [numero, setNumero] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [estaEditando, setEstaEditando] = React.useState(false)

  React.useEffect(() => {
    if(isOpen) {
      setNome(`${contato.nome}`)
      setNumero(contato.numero)
      setEmail(contato.email)
    }

  }, [isOpen, contato])

  const sairDoModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if(e.target === e.currentTarget) fecharModal()
  }

  const cancelaEdicao = () => {
    setEstaEditando(false)
  }

  if(isOpen) {

    const salvarEditado = () => {
      dispatch(
        editar(
          {
            id: contato.id,
            nome: nome,
            numero: numero,
            email: email
          }
        )
      )
    }

    const handleChangeTelefone = (e: { target: { value: any } }) => {
      const valorDigitado = e.target.value;
      const telefoneFormatado = FormatarTelefone(valorDigitado);
      setNumero(telefoneFormatado);
    };


    return (
      <S.ContainerModal onClick={sairDoModal}>
        <S.CardModalForm>

          <BiSolidUserCircle />

            <S.CardModalDiv>   
                   
              <S.DivDoForm>
                <S.Label>
                  <BsPerson />
                </S.Label>
                <InputCardModal 
                  type='text'
                  onChange={(evento: ChangeEvent<HTMLInputElement>) => setNome(evento.target.value)} 
                  value={nome} 
                  disabled={!estaEditando}
                  />
              </S.DivDoForm>
            
              <S.DivDoForm>
                <S.Label>
                  <BsTelephone />
                </S.Label>
                <InputCardModal 
                  type='tel'
                  value={numero} 
                  onChange={(handleChangeTelefone)}
                  disabled={!estaEditando}/>
              </S.DivDoForm>
           
              <S.DivDoForm>
                <S.Label>
                  <BsEnvelopeAt />
                </S.Label>
                <InputCardModal
                type='email'
                 onChange={(evento: ChangeEvent<HTMLInputElement>) => setEmail(evento.target.value)} value={email} disabled={!estaEditando}/>
              </S.DivDoForm>
              
            </S.CardModalDiv>

            {estaEditando ?
              (

                <S.BarraAcoes>

                  <ButtonEditar 
                    editar={enums.Botao.EDITAR}
                    onClick={() => {
                      salvarEditado();
                      setEstaEditando(false)
                      fecharModal()
                    }}
                >
                      Salvar
                  </ButtonEditar>

                  <ButtonEditar 
                    onClick={() => cancelaEdicao()} 
                    remover={enums.Botao.REMOVER}>
                      Cancelar
                  </ButtonEditar>

                </S.BarraAcoes>
              )
            :
              (
                <S.BarraAcoes>

                  <ButtonEditar 
                    onClick={() => {
                      setEstaEditando(true)
                    }}
                    editar={enums.Botao.EDITAR}>
                      Editar
                  </ButtonEditar>

                  <ButtonEditar 
                    onClick={() => dispatch(remover(contato.id)) && fecharModal()} 
                    remover={enums.Botao.REMOVER}>
                      Excluir
                  </ButtonEditar>

                </S.BarraAcoes>
              )
            }

        </S.CardModalForm>
      </S.ContainerModal>
    )
  }

  return null

}

export default CardModal
