// @flow

import { Text } from 'react-native'
import DebugConfig from 'app/config/debug_config'
import AppConfig from 'app/config/app_config'
import Config from 'react-native-config'
import { Sentry } from 'react-native-sentry'
import { default as NewRelic } from 'react-native-newrelic'

declare var console: any

export default () => {
  if (__DEV__) {
    // If ReactNative's yellow box warnings are too much, it is possible to turn
    // it off, but the healthier approach is to fix the warnings.  =)
    console.disableYellowBox = !DebugConfig.yellowBox
  } else {
    Sentry.config(Config.SENTRY_DSN).install()
    NewRelic.init({
      overrideConsole: true,
      reportUncaughtExceptions: true,
      globalAttributes: {
        'this-string': 'will be sent with every event that is being reported'
      }
    })
  }

  // Allow/disallow font-scaling in app
  Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling
}
