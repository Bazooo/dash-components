import * as React from 'react'
import styled from 'styled-components'

interface Props {
  /**
   * Background color of the card
   * @default white
   */
  color?: string

  /**
   * Click handler
   */
  onClick?: () => void
  children: React.ReactNode
}

const Card = ({ color = 'white', onClick, children }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      { children }
    </Container>
  )
}

const Container = styled.div`
  background: ${props => props.color};
  border: 1px solid #eee;
  padding: 30px;
`

export default Card
