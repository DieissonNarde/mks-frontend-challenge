import styled from 'styled-components'

export const HContainer = styled.header`
  height: 7.2rem;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`

export const HContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 4%;

  > .logo {
    h1 {
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #ffffff;

      strong {
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 1.9rem;
      }
    }
  }

  @media (min-width: 1024px) {
    > .logo {
      font-size: 4rem;
    }
  }
`
