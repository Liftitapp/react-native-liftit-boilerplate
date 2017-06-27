import React from 'react'
import { Alert } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import CenteredView from 'storybook/stories/centered_view'
import RoundedButton from 'app/components/rounded_button/rounded_button'
import Package from 'package.json'

export default storiesOf('Rounded Button')
  .add('with text', () => (
    <CenteredView>
      <RoundedButton text='hi from story book' onPress={alertMessage} />
    </CenteredView>
  ))
  .add('with some emojis', () => (
    <CenteredView>
      <RoundedButton text='😀 😎 👍 💯' onPress={alertMessage} />
    </CenteredView>
  ))

const alertMessage = () => {
  Alert.alert(
    'Alert',
    'Clicked: 👍 - App name: ' + Package.name,
    [
      { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]
  )
}
