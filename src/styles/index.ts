import styled , { createGlobalStyle} from 'styled-components'

import * as enums from '../utils/enums/Botao'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }
  
  body {
    background-color: #f6f3f7;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

type TagProps = {
  remover?: enums.Botao.REMOVER
  editar?: enums.Botao.EDITAR
}


function retornarCorButton(props: TagProps): string {
  if(props.editar) return 'green'
  if(props.remover) return 'red'
  return 'black'
}

export const ButtonEditar = styled.button<TagProps>`
  font-size: 18px;
  color: ${(props) => retornarCorButton(props)};
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
  margin-right: 1rem;

  
  &:hover {
    opacity: 0.5;
  }

  &:hover:after {
    width: 100%;
    left: 0%;
  }

  &:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: ${(props) => retornarCorButton(props)};
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`

export const InputCardModal = styled.input`
  font-size: 1rem;
  color: #000;
  background-color: transparent;
  border: none;
  resize: none;
  width: 100%;
  height: 1.5rem;
  outline: 0;

  &:focus {
    border-bottom: 1px solid #000;
  }
`

export default EstiloGlobal