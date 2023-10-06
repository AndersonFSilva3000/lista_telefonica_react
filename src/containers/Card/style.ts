import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 3rem 0;

  @media (max-width: 64rem) {
    padding: 3rem;
  }

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`

export const ContainerCard = styled.div`
  border-top: 3px solid #A9A3EC;
  background-color: #fff;
  border-radius: .2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }

  svg {
    font-size: 4rem;
  }

  h1 {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`