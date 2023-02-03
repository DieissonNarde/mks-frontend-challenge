import styled from 'styled-components'

export const CardItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 2.2rem 2rem;

  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
    padding: 1.9rem 2.5rem;
  }
`

export const IconRemove = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3.2rem;
  color: black;
  background: none;
  border: none;

  cursor: pointer;

  @media (min-width: 1024px) {
    top: -1rem;
    right: -1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
    padding: 0.4rem;
    border: none;
    border-radius: 100%;
    background: black;
  }
`

export const CardImg = styled.div`
  position: relative;
  width: 8rem;
  border-radius: 4px;

  .image {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h4 {
    width: 100%;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.9rem;
    text-align: center;
    color: ${props => props.theme.colors.text};
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    h4 {
      text-align: left;
      max-width: 10rem;
      font-size: 1.3rem;
      line-height: 1.7rem;
    }
  }
`
