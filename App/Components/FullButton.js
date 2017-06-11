import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles/full_button_styles'
import ExamplesRegistry from '../services/examples_registry'

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Full Button', () =>
  <FullButton
    text='Hey there'
  />
)

export default class FullButton extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}
