import styled from 'styled-components'

interface ProductAmountProps {
  active?: boolean
}

export const ProductAmountContainer = styled.div`
  position: relative;
  flex: 2;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  background: transparent;
  border: 0.3px solid black;
  border-radius: 4px;

  span {
    width: 33%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    color: black;

    border-top: 0px;
    border-bottom: 0px;
  }

  @media (min-width: 1024px) {
    max-width: 7rem;

    span {
      font-size: 1.6rem;
    }
  }
`

export const ProductAmountButton = styled.button<ProductAmountProps>`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  color: black;
  background: none;
  border: none;

  cursor: ${props => (props.active ? 'not-allowed' : 'pointer')};

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`
