import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import { configureViewport } from '@storybook/addon-viewport';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';

const req = require.context('../src/components', true, /\.stories\.tsx/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withInfo)
addDecorator(withBackgrounds([
  { name: 'SEA FOAM GREEN', value: '#b9e3c6' },
  { name: 'MEDIUM AQUAMARINE', value: '#59c9a5' },
  { name: 'DOGWOOD ROSE', value: '#d81e5b' },
  { name: 'JAPANESE INDIGO', value: '#23395b' },
  { name: 'CANARY', value: '#fffd98' },
]))
addDecorator(centered)
configureViewport({
  defaultViewport: 'iphone6'
})
configure(loadStories, module)
