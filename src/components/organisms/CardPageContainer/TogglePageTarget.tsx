import React, { useRef } from 'react'
import styled from 'styled-components';

export interface TogglePageTargetProps {
  /**
   *  Gives the reference to the click handler
   */
  onClickRef: (ref: React.RefObject<HTMLDivElement>) => void
  children: React.ReactNode
}

const TogglePageTarget = ({ onClickRef, children }: TogglePageTargetProps) => {
  const ref = useRef(null)
  const onClick = () => {
    onClickRef(ref)
  }

  return (
    <Container ref={ref} onClick={onClick}>
      { children }
    </Container>
  )
}

// Styled components
const Container = styled.div`
  display: inline-block;
`

export default TogglePageTarget
