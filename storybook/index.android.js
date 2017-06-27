import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import 'root/storybook/addons'
import Package from 'root/package.json'

configure(() => {
  require('root/storybook/stories')
}, module)

const StorybookUI = getStorybookUI({
  port: 7007,
  host: '192.168.0.17'
})

AppRegistry.registerComponent(Package.name, () => StorybookUI)
