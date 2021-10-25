import React from 'react';
import Slide from '@material-ui/core/Slide';
import Button from 'components/Button';
import { MobileHeader, MobileHeaderTitle } from 'components/Layout/Layout.styles';
import { StyledArrowBack } from 'components/StyledUI/StyledUI.styles';
import { useInvokeInfo } from 'contexts/AppContext';
import { Container, ContainerBody } from './GlobalScreenInfo.Styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// info type = { title: string, content: jsx }

const MobileGlobalInfo = () => {

    const { info, setInfo } = useInvokeInfo()

    const { title } = info || ""
    const { content } = info || ""

    const handleDismiss = () => { setInfo(null) }

    const handleOnBack = () => {
        if (info && typeof info.onBack === "function") {
            info.onBack()
        } else {
            handleDismiss()
        }
    }

    return (
        <Container
            open={Boolean(info)}
            TransitionComponent={Transition}
            onClose={() => null}
            fullScreen
        >
            <MobileHeader>
                <StyledArrowBack onClick={handleOnBack} />
                <MobileHeaderTitle>{title}</MobileHeaderTitle>
            </MobileHeader>

            <ContainerBody>
                {content}
                <Button handleClick={handleDismiss}>Voltar</Button>
            </ContainerBody>

        </Container>
    )
}

export default MobileGlobalInfo