import styled from "styled-components"

export const Text = styled.p`
  color: #636363;
  max-width: 318px;
  margin: ${props => props.centered ? "0 auto" : "0"};
  letter-spacing: 0.2px;
  font-size: ${props => props.fontSize ? props.fontSize : 14};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "300"};
`