import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import { configureViewport } from '@storybook/addon-viewport';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import { withOptions } from '@storybook/addon-options';

import PropTable from './PropTable'

const req = require.context('../src/components', true, /\.stories\.tsx/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)
addDecorator(
  withInfo({
    header: false,
    excludedPropTypes: [
      'className'
    ]
  })
)
// addDecorator(centered)
addDecorator(
  withOptions({
    name: 'Dashboard Components',
    addonPanelInRight: true,
    sortStoriesByKind: true,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\./
  })
)
addDecorator(
  withBackgrounds([
    { name: 'DOGWOOD ROSE', value: '#d81e5b' },
    { name: 'SEA FOAM GREEN', value: '#b9e3c6' },
    { name: 'MEDIUM AQUAMARINE', value: '#59c9a5' },
    { name: 'JAPANESE INDIGO', value: '#23395b' },
    { name: 'CANARY', value: '#fffd98' },
  ]
))
configureViewport({
  defaultViewport: 'iphone5'
})
configure(loadStories, module)
