import { takeLatest } from 'redux-saga/effects'
import API from '../services/api'
import FixtureAPI from '../services/fixture_api'
import DebugConfig from '../config/debug_config'

/* ------------- Types ------------- */

import { StartupTypes } from '../redux/startup_redux'
import { GithubTypes } from '../redux/github_redux'
import { LoginTypes } from '../redux/login_redux'

/* ------------- Sagas ------------- */

import { startup } from './startup_sagas'
import { login } from './login_sagas'
import { getUserAvatar } from './github_sagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]
}
