// @flow

import Config from 'app/config/debug_config'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

declare var console: any

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron
    .configure({ name: 'Ignite App' })
    .useReactNative()
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin())
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}
