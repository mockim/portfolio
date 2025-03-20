import { ReactNode } from "react"
import styled from "styled-components"

const Stroke = styled.span`
    color: #fff;
    font-size: 4em;
    font-weight: 900;
    -webkit-text-stroke: #000 1px;
`

export const StrokedText = ({children}: {children: ReactNode}) => {
    return (
        <Stroke>{children}</Stroke>
    )
}