import React, { PropTypes } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from './../../themes'
import RoundedButton from './../rounded_button'

// Styles
import styles from './launch_panel_styles'

export const launchPanel = ({
  text
}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
          <Image source={Images.launch_liftit} style={styles.logo} />
        </View>

        <View style={styles.section} >
          <Image source={Images.ready} />
          <RoundedButton text={text} />
          <Text style={styles.sectionText}>
            🔥reactnative-steroids-boilerplate🔥
          </Text>
          <Text style={styles.sectionText}>
            Made with ❤️ by Liftit
          </Text>
        </View>

      </ScrollView>
    </View>
  )
}

launchPanel.propTypes = {
  text: PropTypes.string
}

export default launchPanel
