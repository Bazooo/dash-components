import React, { CSSProperties } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

export interface Origin {
  x: number
  y: number
  width: number
  height: number
}

interface TogglePage {
  /**
   * Toggle the page
   * @default false
   */
  toggle: boolean
  /**
   * Origin of the toggle
   * { x, y, width, height }
   * @default center of screen, 0 width/height
   */
  origin?: Origin
  enter?: CSSProperties
  leave?: CSSProperties
  children?: React.ReactNode
}

const TogglePage = ({ children, toggle = false, origin = {x: 0, y: 0, width: 0, height: 0}, enter, leave }: TogglePage) => {
  const transitions = useTransition(toggle, null, {
    from: {
      transform: `
        translateX(${origin.x}px)
        translateY(${origin.y}px)
      `,
      width: `${origin.width}px`,
      height: `${origin.height}px`,
      ...leave
    },
    enter: {
      transform: `
        translateX(0px)
        translateY(0px)
      `,
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
      ...enter
    },
    leave: {
      transform: `
        translateX(${origin.x}px)
        translateY(${origin.y}px)
      `,
      width: `${origin.width}px`,
      height: `${origin.height}px`,
      ...leave
    },
  })

  return (
    <>
      {
        transitions.map(({ item, props }) =>
          item && <Container style={props}>{children}</Container>
        )
      }
    </>
  )
}

const Container = styled(animated.section)`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
`

export default TogglePage
