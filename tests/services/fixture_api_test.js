import API from 'app/services/api'
import FixtureAPI from 'app/services/fixture_api'
import R from 'ramda'

test('All fixtures map to actual API', () => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  // There is no difference between the intersection and all fixtures
  expect(R.equals(fixtureKeys, intersection)).toBe(true)
})

test('FixtureAPI getRate returns the right file', () => {
  const expectedFile = require('app/fixtures/rate_limit.json')

  expect(FixtureAPI.getRate()).toEqual({
    ok: true,
    data: expectedFile
  })
})

test('FixtureAPI getUser returns the right file for gantman', () => {
  const expectedFile = require('app/fixtures/gantman.json')

  expect(FixtureAPI.getUser('GantMan')).toEqual({
    ok: true,
    data: expectedFile
  })
})

test('FixtureAPI getUser returns the right file for skellock as default', () => {
  const expectedFile = require('app/fixtures/skellock.json')

  expect(FixtureAPI.getUser('Whatever')).toEqual({
    ok: true,
    data: expectedFile
  })
})
