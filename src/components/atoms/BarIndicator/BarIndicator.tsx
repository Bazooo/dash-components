import * as React from 'react'
import styled from 'styled-components'

interface Props {
  /**
   * Position (percentage) of the Indicator
   * @default 0
   */
  position?: number
  /**
   * Position (percentage) of the Indicator
   * @default 0
   */
  color?: string
}

const BarIndicator = ({ position = 0, color = 'white' }: Props) => {
  return (
    <Container>
      <Indicator position={position} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 6px;
  padding: 2px;
  border-radius: 7px;
`

const Indicator = styled.span<Pick<Props, 'position'>>`
  display: block;
  position: absolute;
  background: #ffffff;
  border-radius: 7px;
  height: 6px;

  ${props => {
    const width = props.position ? 100 - Math.abs(props.position) : 100
    const position = props.position && props.position > 0 ? props.position : 0
    return `
      width: calc(${width}% - 4px);
      transform: translateX(2px);
      left: ${position}%;
    `
  }}
`

export default BarIndicator
