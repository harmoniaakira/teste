import { Checkbox } from '@material-ui/core';
import styled from "styled-components";


export const StyledCheckbox = styled(Checkbox)`
        svg {
            path:first-of-type {
                ${({ $colorone }) => `fill: ${$colorone || "#fff;"} `}
            }
            path:last-of-type {
                ${({ $colortwo }) => `fill: ${$colortwo || "#757575;"} `}
            }
        }
`