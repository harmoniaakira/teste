import styled from 'styled-components'

export const ButtonComponent = styled.button`
  width: 280px;
  min-height: 48px;
  font-size: 12px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  border-radius: 100px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.11);
  transition: background-color 0.5s ease;
  text-transform: uppercase;
  cursor: pointer;

  ${props => props.fullScreen 
    ? "margin: 0 auto;"
    : ""
  }

  ${props => props.disabled 
    ? "background-color: #E0E0E0;" +
      "color: #8E8E93;" +
      "cursor: default;"
    : "background-color: #054375;" +
      "color: white;"
  }

  &:hover {
    ${props => props.disabled 
      ? "background-color: #E0E0E0;"
      : "background: #043C64;"
    }
  }

  @media (min-width: 1440px) {
    width: 158px;
    float: right;
  }
`
export const ButtonPopup = styled.button`
  width: 280px;
  height: 48px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 0.75px;
  border: none;
  border-radius: 100px;
  text-transform: uppercase;
  transition: background-color 0.5s ease;
  cursor: pointer;
  background-color: transparent;

  ${props => props.disabled 
    ? "color: #8E8E93;" +
      "cursor: default;"
    : "color: #054375;"
  }

  &:hover {
    ${props => props.disabled 
      ? "background-color: transparent;"
      : "background: rgba(5, 67, 117, .1);"
    }
  }

  @media (min-width: 1440px) {
    width: 158px;
    float: right;
  }
`