import { combineReducers } from 'redux'
import configureStore from './create_store'
import rootSaga from '../sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
