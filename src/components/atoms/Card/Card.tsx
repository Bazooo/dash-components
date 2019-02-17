import * as React from 'react'
import styled from 'styled-components'

interface Props {
  /**
   * Click handler
   */
  onClick?: () => void
  children: React.ReactNode
}

const Card = ({ onClick, children }: Props) => {
  return (
    <Container onClick={onClick}>
      { children }
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer;
`

export default Card
