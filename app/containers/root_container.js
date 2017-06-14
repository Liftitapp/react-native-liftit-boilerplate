import React from 'react'
import { View, StatusBar } from 'react-native'
import Navigation from 'app/navigation/app_navigation'
import { connect } from 'react-redux'

// Styles
import styles from 'app/containers/styles/root_container_styles'

const RootContainer = () => (
  <View style={styles.applicationView}>
    <StatusBar barStyle='light-content' />
    <Navigation />
  </View>
)

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({})

export default connect(null, mapDispatchToProps)(RootContainer)
