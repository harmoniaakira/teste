import styled, { keyframes } from 'styled-components'

export const loadingCircle = keyframes`
    100% { transform: rotate(-360deg) }
`

export const Container = styled.div`
    margin-top: 16px;
    display: flex;
    width: 70px;
    height: 70px;
    animation: ${loadingCircle} 3s infinite linear;

    // border: 1px solid;
    // border-radius: 50%;
`