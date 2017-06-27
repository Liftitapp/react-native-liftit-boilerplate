import React, { PropTypes } from 'react'
import { View } from 'react-native'

const style = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#F5FCFF'
}

const CenteredView = ({ children }) => (
  <View style={style}>
    { children }
  </View>
)

CenteredView.propTypes = {
  children: PropTypes.object
}

export default CenteredView
