import styled from 'styled-components'

interface ICartContent {
  open: boolean
}

export const CartContainer = styled.aside<ICartContent>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  width: 90vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${props => props.theme.colors.primary};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 600px) {
    width: 50rem;
  }

  @media (min-width: 1200px) {
    width: 48.6rem;
  }
`

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  font-size: 4.6rem;
  color: white;

  margin-block: 2.4rem;
  padding: 0 1.5rem 0 3.2rem;

  h2 {
    font-weight: 700;
    font-size: 2.7rem;
    line-height: 3.3rem;
    color: white;
  }

  > svg {
    color: black;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    padding: 0 2.2rem 0 4.7rem;
    font-size: 3.8rem;

    h2 {
      max-width: 18rem;
    }
  }
`

export const ListItems = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.3rem;

  padding: 1rem 2rem;

  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.primary};

  @media (min-width: 1024px) {
    gap: 2.8rem;
  }
`

export const CartTotal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 700;
  font-size: 2.8rem;
  color: white;

  padding: 1rem 1.5rem 2rem 3.2rem;

  @media (min-width: 1024px) {
    padding: 1rem 2.2rem 2rem 4.7rem;
  }
`

export const CartButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 2rem;
  color: white;
  padding-block: 2.6rem;
  background-color: ${props => props.theme.colors.button};
  border: none;

  cursor: pointer;

  &:hover {
    background: #232323;
  }
`
