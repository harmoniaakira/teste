import styled from 'styled-components'

export const Wrapper = styled.div `
    margin: 0 auto;
    height: 32px;
    width: 308px;
    display: flex;
    text-align: left;
    align-items: center;
    cursor: default;

    @media (min-width: 1440px) {
        margin: 0;
        width: 380px;
    }
`

export const Label = styled.span` 
    color: #636366;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    max-width: 275px;
    
    @media (min-width: 1440px) {
        max-width: 358px;
    }
`

export const Box = styled.div`
    height: 14px;
    width: 14px;
    border-radius: 2px;
    border: 2px solid #636366;
    margin-right: 8px;
    cursor: pointer;
    position: relative;
`

export const Check = styled.div`
    display: ${props => props.value ? "inline-block" : "none"};
    width: 15px;
    height: 15px;
    position: relative;

    &::before {
        position: absolute;
        left: -6px;
        bottom: 6px;
        height: 2px;
        width: 50%;
        background-color: #636366;
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }

    &::after {
        position: absolute;
        left: -7px;
        top: 34%;
        height: 23%;
        width: 2px;
        background-color: #636366;
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }
`