// @flow

import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from 'app/components/rounded_button/rounded_button_styles'

// Types
type Props = {
  text: string,
  onPress: Function
}

const roundedButton = ({ text, onPress }: Props) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
  </TouchableOpacity>
)

roundedButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
}

export default roundedButton
