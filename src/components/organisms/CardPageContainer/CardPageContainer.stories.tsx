import React from 'react'
import { storiesOf } from '@storybook/react'

import CardPageContainer from './CardPageContainer'
import Card from 'components/atoms/Card';
import styled from 'styled-components';

const stories = storiesOf('Organisms.CardPage', module)

stories.add('Base', () => {
  return (
    <CardPageContainer>
      <Card1>
        hello guys
      </Card1>
      <Card2>
        maan
      </Card2>
    </CardPageContainer>
  )
})

// Styled Components

const Card1 = styled(Card)`
  width: 40px;
  height: 42px;
  background: #ffffff;
`

const Card2 = styled(Card)`
  width: 40px;
  height: 82px;
  background: #ffffff;
`
