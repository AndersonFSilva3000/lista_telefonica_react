import React from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { ButtonEditar } from '../../styles'
import * as enums from '../../utils/enums/Botao'
import { cadastrar } from '../../store/reducers/contatos'
import { FormatarTelefone } from '../../utils/FormatarTelefone'

type CadastroModalProps = {
  isOpen: boolean,
  fecharModal: () => void
}

const CadastroModal = ({isOpen, fecharModal}: CadastroModalProps) => {
  const dispatch = useDispatch()

  const [nome, setNome] = React.useState('')
  const [numero, setNumero] = React.useState('')
  const [email, setEmail] = React.useState('')

  const cadastrarContato = (evento: React.FormEvent) => {
    evento.preventDefault()
    fecharModal()

    dispatch(
      cadastrar({
        nome,
        numero,
        email
      })
    )
  }

  const sairDoModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if(e.target === e.currentTarget) fecharModal()
  }

  const handleChangeTelefone = (e: { target: { value: any } }) => {
    const valorDigitado = e.target.value;
    const telefoneFormatado = FormatarTelefone(valorDigitado);
    setNumero(telefoneFormatado);
  };

    if(isOpen) {
      return(
        <S.ContainerPrincipal onClick={sairDoModal}>
          <S.CadastroMadalContainer onSubmit={cadastrarContato}>

            <S.Titulo>
              Cadastrar Contato
            </S.Titulo>

            <S.ContainerInfos>
              <S.Label>
                <S.Input 
                  type='text'
                  required   
                  onChange={(eveto: React.ChangeEvent<HTMLInputElement>) =>
                    setNome(eveto.target.value)
                  }              
                />
                <span>Nome Completo</span>
              </S.Label>
              <S.Label>
                <S.Input
                  className='inputMask' 
                  type='tel' 
                  value={numero}
                  onChange={(handleChangeTelefone)
                  }  
                  required
                />
                <span>Tel. / Cel.</span>
              </S.Label>
              <S.Label>
                <S.Input
                  type='email' 
                  required
                  onChange={(eveto: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(eveto.target.value)
                  }  
                />
                <span>Email</span>
              </S.Label>

              <ButtonEditar 
                editar={enums.Botao.EDITAR} 
                type='submit'
                >
                  Salvar
              </ButtonEditar>

            </S.ContainerInfos>
          </S.CadastroMadalContainer>
        </S.ContainerPrincipal>
      )
    }

    return null
}

export default CadastroModal
