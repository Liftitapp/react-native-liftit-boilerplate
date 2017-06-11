import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Navigation from '../navigation/app_navigation'
import { connect } from 'react-redux'
import StartupActions from '../redux/startup_redux'
import ReduxPersist from '../config/redux_persist'

// Styles
import styles from './styles/root_container_styles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      // this.props.startup()
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <Navigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
