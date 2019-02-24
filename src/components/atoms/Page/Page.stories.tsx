import React from 'react'
import { storiesOf } from '@storybook/react'

import Page from './Page'

const stories = storiesOf('Atoms.Page', module)

stories.add('Base', () => (
  <Page>
    <span>this is a full page</span>
  </Page>
))
