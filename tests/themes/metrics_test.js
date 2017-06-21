import { CalcScreenHeight, CalcScreenWidth, CalcPlatform } from 'app/themes'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

test('ScreenWidth with height largest than width must be width', () => {
  expect(CalcScreenWidth(width, height)).toBe(width)
})

test('ScreenWidth with width largest than height must be height', () => {
  expect(CalcScreenWidth(height, width)).toBe(width)
})

test('ScreenHeight with width largest than height must be width', () => {
  expect(CalcScreenHeight(height, width)).toBe(height)
})

test('ScreenHeight with height largest than width must be height', () => {
  expect(CalcScreenHeight(width, height)).toBe(height)
})

test('Platform == ios', () => {
  expect(CalcPlatform({ OS: 'ios' })).toBe(64)
})

test('Platform == android', () => {
  expect(CalcPlatform({ OS: 'android' })).toBe(54)
})
