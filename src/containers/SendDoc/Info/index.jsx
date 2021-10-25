import React from 'react'
import { DocNeedText, DocNeedTitle, DocRgCnhText, DocRgCnhTitle } from './SendDocInfo.Styles'

const SendDocInfo = () => {

    return (
        <>
            <DocNeedTitle>Documentos necessários</DocNeedTitle>
            <DocNeedText>
                Precisaremos de alguns documentos do cliente.
                Abaixo você confere os documentos indispensáveis para dar continuidade à proposta. :)
            </DocNeedText>
            <DocRgCnhTitle>RG ou CNH</DocRgCnhTitle>
            <DocRgCnhText>O documento precisa estar legível e dentro da validade.</DocRgCnhText>
        </>
    )
}

export default SendDocInfo