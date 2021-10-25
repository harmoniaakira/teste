import React from 'react'
import { ReactComponent as TribancoLoader } from 'assets/icons/loader.svg';
import { Container } from './Loader.styles';

const Loader = () => {
    return (
        <Container>
            <TribancoLoader />
        </Container>
    )
}

export default Loader