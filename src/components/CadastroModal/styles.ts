import styled from "styled-components";

export const ContainerPrincipal = styled.div`
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

  @media (max-width: 48rem) {
    padding: 1rem;
  }
`

export const CadastroMadalContainer = styled.form`
  width: 50%;
  height: 60%;
  border-radius: .5rem;
  background-color: #fff;
  border-top: .5rem solid #A9A3EC;
  transform: scale(.4);
  animation: scaleUp .3s forwards;
  padding: 2rem;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: 48rem) {
    width: 90%;
    height: 50%;
    overflow-y: scroll;
  }
`

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`

export const Titulo = styled.h2`
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  position: relative;

  span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: gray;
    font-size: .9em;
    transition: top 0.3s ease, font-size 0.3s ease;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 5px;

  &:placeholder-shown + ${Label} span {
    top: 15px;
    font-size: 0.9em;
  } 

  &.focus + span, &:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
`