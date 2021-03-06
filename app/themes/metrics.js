// @flow

import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const CalcScreenWidth = (localWidth: number = width, localHeight: number = height): number => localWidth < localHeight ? localWidth : localHeight
const CalcScreenHeight = (localWidth: number = width, localHeight: number = height): number => localWidth < localHeight ? localHeight : localWidth
const CalcNavBarHeight = (_Platform: Object = Platform): number => _Platform.OS === 'ios' ? 64 : 54

// Used via Metrics.baseMargin
const Metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: CalcScreenWidth(),
  screenHeight: CalcScreenHeight(),
  navBarHeight: CalcNavBarHeight(),
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export { Metrics, CalcScreenWidth, CalcScreenHeight, CalcNavBarHeight }
