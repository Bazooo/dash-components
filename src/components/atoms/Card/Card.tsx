import React from 'react'
import styled from 'styled-components'

export interface CardProps {
  /**
   * Click handler
   */
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

const Card = ({ onClick, children, className }: CardProps) => {
  return (
    <Container onClick={onClick} className={className} >
      { children }
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer;
`

export default Card
