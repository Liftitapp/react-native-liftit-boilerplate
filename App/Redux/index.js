import { combineReducers } from 'redux'
import configureStore from './create_store'
import rootSaga from '../sagas/'
import { reducer as GithubReducer } from './github_redux'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: GithubReducer
  })

  return configureStore(rootReducer, rootSaga)
}
