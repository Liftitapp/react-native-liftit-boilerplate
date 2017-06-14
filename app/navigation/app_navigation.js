import { StackNavigator } from 'react-navigation'
import LaunchScreen from 'app/screens/launch_screen'

import styles from 'app/navigation/navigation_styles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
