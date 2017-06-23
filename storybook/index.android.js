import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import 'ReactNativeLiftitBoilerplate/storybook/addons'

// import your stories
configure(() => {
  require('ReactNativeLiftitBoilerplate/storybook/stories')
}, module)

const StorybookUI = getStorybookUI({
  port: 7007,
  host: '192.168.0.12'
})

AppRegistry.registerComponent('ReactNativeLiftitBoilerplate', () => StorybookUI)
