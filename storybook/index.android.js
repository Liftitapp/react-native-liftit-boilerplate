import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import Package from 'root/package.json'
import 'root/storybook/addons'

configure(() => {
  require('root/storybook/stories')
}, module)

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost'
})

AppRegistry.registerComponent(Package.name, () => StorybookUI)
