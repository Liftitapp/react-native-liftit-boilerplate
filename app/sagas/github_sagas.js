// @flow

import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import GithubActions from 'app/redux/github_redux'
// Types
import type GithubTypes from 'app/redux/github_redux'
import type { ApiType } from 'app/services/api'

export function * getUserAvatar (api: ApiType, { username }: GithubTypes): Generator<any, any, any> {
  // make the call to the api
  const response = yield call(api.getUser, username)

  if (response.ok) {
    const firstUser = path(['data', 'items'], response)[0]
    const avatar = firstUser.avatar_url
    // do data conversion here if needed
    yield put(GithubActions.userSuccess(avatar))
  } else {
    yield put(GithubActions.userFailure())
  }
}
