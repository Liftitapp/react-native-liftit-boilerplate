// @flow

import { combineReducers } from 'redux'
import configureStore from 'app/redux/create_store'
import rootSaga from 'app/sagas/'
import { reducer as GithubReducer } from 'app/redux/github_redux'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: GithubReducer
  })

  return configureStore(rootReducer, rootSaga)
}
