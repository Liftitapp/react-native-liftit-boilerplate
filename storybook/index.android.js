import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import Package from 'package.json'
import 'storybook/addons'

configure(() => {
  require('storybook/stories')
}, module)

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost'
})

AppRegistry.registerComponent(Package.name, () => StorybookUI)
