import API from 'app/services/api'
import FixtureAPI from 'app/services/fixture_api'
import R from 'ramda'

realAPI = API.create()

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

test('FixtureAPI getRoot returns the right file', () => {
  const expectedFile = require('app/fixtures/root.json')

  expect(FixtureAPI.getRoot()).toEqual({
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

test('API Service expose three public methods and this returns a defined object', () => {
  const apiKeys = R.keys(realAPI)
  expect(apiKeys).toEqual(['getRoot', 'getRate', 'getUser'])

  expect(R.hasIn('getRoot', realAPI)).toEqual(true)
  expect(R.hasIn('getRate', realAPI)).toEqual(true)
  expect(R.hasIn('getUser', realAPI)).toEqual(true)

  //Modify this lines to test your API endpoints instead of Github API endpoints
  expect(realAPI.getRoot()).toBeDefined()
  expect(realAPI.getRate()).toBeDefined()
  expect(realAPI.getUser('qavor')).toBeDefined()
})
