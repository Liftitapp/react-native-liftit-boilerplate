import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles/drawer_button_styles'
import ExamplesRegistry from '../services/examples_registry'

// Note that this file (App/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Drawer Button', () =>
  <DrawerButton
    text='Example left drawer button'
  />
)

class DrawerButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default DrawerButton
