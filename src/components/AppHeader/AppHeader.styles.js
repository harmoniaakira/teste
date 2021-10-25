import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  height: max-content;

  text-align: center;

  @media (min-width: 1440px) {
    display: none;
  }
`

export const Banner = styled.img`
  width: 100%;
  margin-bottom: -90px;

  @media (max-width: 1439px) {
    margin-bottom: 0;
  }
`

export const Avatar = styled.img`
  width: ${props => props.avatarFullSize
            ? "100%;"
            : "calc(100% - 237px);"
        };
  max-width: 220px;
  margin-top: -30%;
`