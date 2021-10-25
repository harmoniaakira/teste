import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import SendDocInfo from 'containers/SendDoc/Info';

const AppContext = createContext({
    info: null,
    setInfo: () => null
});

const AppContextProvider = ({ children }) => {
    const [info, setInfo] = useState(null)

    return (
        <AppContext.Provider value={{ info, setInfo }}>
            {children}
        </AppContext.Provider>
    )
}

export function useInvokeInfo() {
    const { info, setInfo } = useContext(AppContext)
    return {
        info,
        setInfo
    }
}

export function useInvokeSendDocInfo() {
    const { setInfo } = useContext(AppContext)
    const openInfo = () => { setInfo({ title: "Captura de Documento", content: <SendDocInfo /> }) }

    return { openInfo }
}

export default AppContextProvider

AppContextProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}