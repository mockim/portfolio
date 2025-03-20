import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding: 24px;
    text-align: right;
`

export const Header = ({children}: {children: ReactNode}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}