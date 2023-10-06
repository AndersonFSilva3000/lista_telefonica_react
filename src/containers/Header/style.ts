import styled from 'styled-components'

export const Header = styled.header`
  padding: 2rem 0;
  background-image: linear-gradient(150deg, #6358e0, #A9A3EC) ;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`

export const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 3rem;

    @media (max-width: 48rem) {
      font-size: 2rem;
    }
  }
`

export const Titulo = styled.h1`
  font-size: 2rem;
  margin-left: .5rem;

  @media (max-width: 48rem) {
    font-size: 2rem;
  }
`

export const AddContato = styled.button`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;

  &:hover {
    opacity: .5;
  }

  &:hover:after {
    width: 100%;
    left: 0%;
  }

  &:after {
    content: '';
    pointer-events: none;
    border: -2px;
    left: 50%;
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #000;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
    bottom: 0;
  }

  svg {
    font-size: 1.5rem;
    margin-right: .3rem;
  }

  @media (max-width: 48rem) {
    margin-top: 1rem;
  }
`