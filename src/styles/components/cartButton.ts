import styled from 'styled-components'

export const CartButtonContent = styled.button`
  width: 9rem;
  height: 4.5rem;

  background: #ffffff;
  border-radius: 8px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  > div svg {
    width: 1.9rem;
    height: auto;
  }

  > div span {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #000000;
  }
`
