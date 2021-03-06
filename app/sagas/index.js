// @flow

import { takeLatest } from 'redux-saga/effects'
import API from 'app/services/api'
import FixtureAPI from 'app/services/fixture_api'
import DebugConfig from 'app/config/debug_config'
import Config from 'react-native-config'

/* ------------- Types ------------- */

import { GithubTypes } from 'app/redux/github_redux'

/* ------------- Sagas ------------- */

import { getUserAvatar } from 'app/sagas/github_sagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create(Config.GITHUB_API_URL)

/* ------------- Connect Types To Sagas ------------- */

export default function * root (): Generator<any, any, any> {
  yield [
    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]
}
