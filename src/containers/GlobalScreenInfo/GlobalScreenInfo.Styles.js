import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
// import cards from 'assets/icons/polygons.svg'
import cards2 from 'assets/icons/polygons.png'

export const Container = styled(Dialog)`
    .MuiBackdrop-root { background: #f0f0f0; }
    .MuiDialog-paper { 
        box-shadow: none; 
        max-width: 768px;
        background-image: url(${cards2});
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: 100%;
    }

`

export const ContainerBody = styled.div`
    height: calc(100vh - 56px);
    min-width: 290px;
    max-width: 90vw;
    
    display: flex;
    flex-direction: column;

    padding: 25px 0 40px;
    margin: auto;

    & > button { 
        margin: auto;
        margin-bottom: 0;
    }
`

