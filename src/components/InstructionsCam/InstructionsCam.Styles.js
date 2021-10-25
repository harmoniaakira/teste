import styled from "styled-components"

export const InstructionsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25px 1fr 25px;
    grid-template-rows: 25px;
    column-gap: 18px;
    row-gap: 8px;
`

export const InstructionIcon = styled.div`
    width: 25px;
    height: 25px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
export const InstructionMsg = styled.div`
    color: #FFFFFF;
    font-size: 16px;
    justify-self: flex-start;
`