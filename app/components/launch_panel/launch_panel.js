// @flow

import React from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Images } from 'app/themes'
import RoundedButton from 'app/components/rounded_button'
import Config from 'react-native-config'
import I18n from 'app/i18n'

// Styles
import styles from 'app/components/launch_panel/launch_panel_styles'

// Types
type Props= {
  text: string
}

const launchPanel = ({ text }: Props) => (
  <View style={styles.mainContainer}>
    <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
    <ScrollView style={styles.container}>
      <View style={styles.centered}>
        <Image source={Images.launch_liftit} style={styles.logo} />
      </View>

      <View style={styles.section} >
        <Image source={Images.ready} />
        <RoundedButton text={text} onPress={alertMessage} />
        <Text style={styles.sectionText}>
          🔥reactnative-steroids-boilerplate🔥
        </Text>
        <Text style={styles.sectionText}>
          Made with ❤️ by Liftit
        </Text>
        <Text style={styles.sectionText}>
          Código: { Config.APP_VERSION_CODE } - v{ Config.APP_VERSION_NAME }
        </Text>
        <Text style={styles.sectionText}>
          Ejemplo i18n: { I18n.t('greetings') }
        </Text>
      </View>

    </ScrollView>
  </View>
)

const alertMessage = () => {
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      { text: 'Ask me later', onPress: () => console.tron.log('Ask me later pressed', true) },
      { text: 'Cancel', onPress: () => console.tron.log('Cancel Pressed'), style: 'cancel' },
      { text: 'OK', onPress: () => console.tron.log('OK Pressed') }
    ]
  )
}

export default launchPanel
