import React from 'react'
import { storiesOf } from '@storybook/react'

import TogglePage from './TogglePage'
import { boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Atoms.TogglePage', module)

stories.add('Base', () => {
  const toggle = boolean('toggle', false)
  return (
    <div>
      <TogglePage toggle={toggle} origin={{
        x: 20,
        y: 40,
        width: 60,
        height: 50
      }}>
        boom
      </TogglePage>
    </div>
  )
})
