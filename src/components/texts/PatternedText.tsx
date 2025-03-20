import { ReactNode } from "react";
import styled from "styled-components";

const Pattern = styled.span`
  font-size: 9em;
  font-weight: 900;
  background: repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 1px, transparent 1px, transparent 4px);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: #000 1px;
`

export const PatternedText = ({children}: {children: ReactNode}) => {
  return (
    <Pattern>{children}</Pattern>
  )
}