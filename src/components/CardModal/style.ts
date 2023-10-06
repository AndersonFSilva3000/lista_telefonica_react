import styled from 'styled-components'

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  padding: 3rem;

  svg {
    font-size: 5rem;
    margin-top: 1rem;
  }

  @media (max-width: 48rem) {
    padding: 1rem;
  }
` 

export const CardModalForm = styled.div`
  width: 30vw;
  height: 50vh;
  border-radius: .2rem;
  background-color: #fff;
  border-top: .5rem solid #A9A3EC;
  text-align: center;
  transform: scale(.5);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: 64rem) {
    width: 70%;
    height: 50%;
    overflow-y: scroll;
  }

  @media (max-width: 48rem) {
    width: 100%;
    height: 50%;
    padding: 1rem;
  }
`

export const CardModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 1rem;
`

export const DivDoForm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`

export const Label = styled.label`
    svg {
      font-size: 1.3rem;
      line-height: 1rem;
      margin-top: 0;
      margin-right: .5rem;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1.5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`





