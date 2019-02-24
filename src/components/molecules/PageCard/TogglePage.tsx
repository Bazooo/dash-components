import React, { useRef } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

// import Page from 'components/atoms/Page'

interface Props {
  targetContainer: React.ReactNode
  onComplete?: () => void
  opened?: boolean
  children: React.ReactNode
}

const TogglePage = ({ targetContainer, onComplete, opened = false, children }: Props) => {
  const pageRef = useRef(null)

  return (
    <Container ref={pageRef}>
      { children }
    </Container>
  )
}

const Container = styled(animated.div)`
  width: 100vw;
  height: 100vh;
`

export default TogglePage
