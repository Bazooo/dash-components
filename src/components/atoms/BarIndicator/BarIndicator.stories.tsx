import * as React from 'react'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import BarIndicator from './BarIndicator'

const stories = storiesOf('Atoms|BarIndicator', module)

stories.add('BarIndicator', () => {
  const options = {
    range: true,
    min: -100,
    max: 100,
    step: 0.1
  }
  const position = number('Position', 0, options)

  return (
    <div style={{ width: '300px' }}>
      <BarIndicator position={position} />
    </div>
  )
})
