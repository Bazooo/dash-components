import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Card from './Card'

const stories = storiesOf('Atoms|Card', module)

stories.add('Card', () => (
  <Card onClick={action('onClick')}>
    <span>This is a card</span>
  </Card>
))
