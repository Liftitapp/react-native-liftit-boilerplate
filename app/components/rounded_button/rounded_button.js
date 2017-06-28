// @flow

import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from 'app/components/rounded_button/rounded_button_styles'

// Types
type _type = {
  text: string,
  onPress: Function
}

const roundedButton = ({ text, onPress }: _type) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
  </TouchableOpacity>
)

roundedButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
}

export default roundedButton
