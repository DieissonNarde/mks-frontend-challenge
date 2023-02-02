import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
`
export const ListProducts = styled.div`
  margin-block: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: center;

  @media (min-width: 1024px) {
    margin-block: 6rem;
    gap: 2rem;
  }
`
