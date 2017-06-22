// @flow

import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

let languageCode = I18n.locale.substr(0, 2)

// All other translations for the app goes to the respective language file:
switch (languageCode) {
  case 'es':
    I18n.translations.es = require('app/i18n/languages/es.json')
    break
  default:
    I18n.translations.en = require('app/i18n/languages/en.json')
    break
}

export default I18n
