// @flow

import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from 'app/components/rounded_button/rounded_button_styles'

// Types
import type { RoundedButtonType } from 'app/types/rounded_button'

const roundedButton = (props: RoundedButtonType) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.text.toUpperCase()}</Text>
  </TouchableOpacity>
)

roundedButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
}

export default roundedButton
