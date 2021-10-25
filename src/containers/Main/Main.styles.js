import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #f0f0f0;
  color: ${({ theme }) => theme.palette.primary.main};
`
