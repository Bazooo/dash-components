import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: React.ReactNode
}

const Page = ({ className, children }: Props) => {
  return (
    <Container className={className} >
      { children }
    </Container>
  )
}

const Container = styled.section`
  width: 100vw;
  height: 100vh;
`

export default Page
