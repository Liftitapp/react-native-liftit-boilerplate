import { combineReducers } from 'redux'
import configureStore from './create_store'
import rootSaga from '../sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: require('./github_redux').reducer,
    login: require('./login_redux').reducer,
    search: require('./search_redux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
