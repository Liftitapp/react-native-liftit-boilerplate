import ReduxPersist from '../config/redux_persist'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import DebugConfig from '../config/debug_config'

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion
  const config = ReduxPersist.storeConfig

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        if (DebugConfig.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion
            },
            preview: 'Reducer Version Change Detected',
            important: true
          })
        }
        // Purge store
        persistStore(store, config).purge()
        AsyncStorage.setItem('reducerVersion', reducerVersion)
      } else {
        persistStore(store, config)
      }
    })
    .catch(() => {
      persistStore(store, config)
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    })
}

export default { updateReducers }
