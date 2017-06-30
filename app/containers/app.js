import 'app/config'
import DebugConfig from 'app/config/debug_config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from 'app/containers/root_container'
import createStore from 'app/redux'

// create our store
// @flow

const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
