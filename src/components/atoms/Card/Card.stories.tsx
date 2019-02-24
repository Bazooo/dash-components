import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import centered from '@storybook/addon-centered';

import Card from './Card'

const stories = storiesOf('Atoms.Card', module)
stories.addDecorator(centered)

stories.add('Base', () => (
  <Card onClick={action('card clicked!')}>
    <span>This is a card</span>
  </Card>
))

stories.add('Example', () => (
  <WhiteCard onClick={action('whitecard clicked!')}>
    <span>This is another card</span>
  </WhiteCard>
))

const WhiteCard = styled(Card)`
  background: #ffffff;
  border-radius: 6px;
  padding: 30px 15px;
`
