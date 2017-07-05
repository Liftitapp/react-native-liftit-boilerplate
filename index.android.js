import './app/config/reactotron_config'
import { AppRegistry } from 'react-native'
import App from './app/containers/app'
import Config from 'react-native-config'
import { Sentry } from 'react-native-sentry'

Sentry.config(Config.SENTRY_DSN).install()

AppRegistry.registerComponent('ReactNativeLiftitBoilerplate', () => App)
