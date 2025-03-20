import { ReactNode } from "react"
import styled from "styled-components"

const Fill = styled.span`
    font-weight: 900;
    font-size: 9em;
`

export const FilledText = ({children}: {children: ReactNode}) => {
    return (
        <Fill>{children}</Fill>
    )
}