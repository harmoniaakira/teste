import styled from 'styled-components'
import IconButtonComponent from '@material-ui/core/IconButton';

export const Container = styled.div`
  text-align: left;
  margin: 0 auto 60px auto;
  width: 100%;
  max-width: 768px;
  padding: 0 24px;

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0;
    text-align: unset;
    padding: 0;
  }
`

export const Content = styled.div`
  width: 518px;
  min-height: 170px;
  max-height: 928px;
  margin: 0;
  position: absolute;
  top: 24%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

export const Avatar = styled.img`

`

export const IconButton = styled(IconButtonComponent)`
  color: #8E8E93;
`

export const Breadcrumb = styled.div `
  display: flex;
`

export const BreadcrumbTitle = styled.div `
  color: #636366;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  margin: auto 0;
`