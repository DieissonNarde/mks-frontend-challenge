import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 25.5rem;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  overflow: hidden;

  margin: 1rem;
  transition: 0.5s linear;

  &:hover {
    box-shadow: none;
  }

  .card-info {
    margin-top: 1.2rem;

    padding: 1rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #2c2c2c;
      }
    }

    p {
      color: #2c2c2c;
      margin: 1rem 0;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }

  button {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    border: none;
    outline: none;
    background: #0f52ba;
    color: white;
    width: 100%;
    height: 4rem;
    display: block;
    cursor: pointer;
    transition: 0.5s linear;

    &:hover {
      background: #232323;
    }
  }
`

export const CardImg = styled.div`
  width: 26rem;
  height: 30rem;
  position: relative;
  border-radius: 4px;
  border: 1px solid #e7e7e7;

  .image {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`
