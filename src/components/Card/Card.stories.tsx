import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Card from './Card'

const stories = storiesOf('Basics', module)

stories.add('Card', () => (
  <Card onClick={action('onClick')}>
    <span>This is a card</span>
  </Card>
))
