import React from 'react'
import styled from 'styled-components';

interface Position {
  x: number
  y: number
}

interface Dimension {
  width: number
  height: number
}

export interface PageTargetContainer {
  getPosition: (position: Position) => void
  getDimension: (dimension: Dimension) => void
  children: React.ReactNode
}

const PageTargetContainer = ({ getPosition, getDimension, children }: PageTargetContainer) => {
  const test = (elem: HTMLDivElement) => {
    if (elem) {
      const {left, top, width, height } = elem.getBoundingClientRect()
      getPosition({
        x: left,
        y: top
      })

      getDimension({
        width,
        height
      })
    }
  }

  return (
    <Container ref={test}>
      { children }
    </Container>
  )
}

const Container = styled.div``

export default PageTargetContainer
