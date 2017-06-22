import { CalcScreenHeight, CalcScreenWidth, CalcNavBarHeight } from 'app/themes'

const [width, height] = [1, 2]

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
  expect(CalcNavBarHeight({ OS: 'ios' })).toBe(64)
})

test('Platform == android', () => {
  expect(CalcNavBarHeight({ OS: 'android' })).toBe(54)
})
