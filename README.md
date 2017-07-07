
   
   #  ReactNativeLiftitBoilerplate
   ----
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![Build Status](https://semaphoreci.com/api/v1/liftit/react-native-liftit-boilerplate/branches/develop/shields_badge.svg)](https://semaphoreci.com/liftit/react-native-liftit-boilerplate) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/3383bed845e84ecbafbdc8ba20e6c55e)](https://www.codacy.com/app/Liftit/react-native-liftit-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Liftitapp/react-native-liftit-boilerplate&amp;utm_campaign=Badge_Grade)

🔥reactnative-steroids-boilerplate🔥

Operating systems supported >= Android 4.4 (API 19)

## Setup

**Step 1:** `git clone https://github.com/Liftitapp/react-native-liftit-boilerplate.git <YourProjectName>`

**Step 2:** `cd <YourProjectName> && npm install`

## Run app

1. `cd <YourProjectName>`
2. Create a `.env` file with the following variables:
```
APP_VERSION_CODE /*Version code of your Android app ie. 0.0.1*/
APP_VERSION_NAME /*Version name of your Android app ie. v0.1-beta*/
GITHUB_API_URL=https://api.github.com/
```
3. Run Build for Android (iOS following soon)
    * for Android
      * Run your preffer Android emulator or connect your phone with the Debugging Mode enabled
      * `npm run start`
      * On another console: `react-native run-android`

## Directory Structure
 * [android](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/android)
 * [app](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app)
    * [components](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/components)
    * [config](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/config)
    * [containers](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/containers)
    * [fixtures](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/fixtures)
    * [i18n](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/i18n)
    * [images](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/images)
    * [lib](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/lib)
    * [navigation](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/navigation)
    * [redux](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/redux)
    * [sagas](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/sagas)
    * [screens](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/screens)
    * [services](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/services)
    * [themes](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/themes)
    * [transforms](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/app/transforms)
 * [ignite](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/ignite)
 * [ios](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/ios)
 * [storybook](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/storybook)
 * [tests](https://github.com/Liftitapp/react-native-liftit-boilerplate/tree/master/tests)


## Features

| Feature | Summary |
| --- | --- |
| [Ignite](https://github.com/infinitered/ignite) | The project was generated with this tool|
| [DotEnv](https://www.npmjs.com/package/dotenv) | Environment variables for Javascript files. - [+ info](#dotenv)|
| [ReactNativeConfig](https://github.com/luggit/react-native-config) | Environment vars for React components and Android (*.xml, *.gradle, *.java) files. - [+ info](#react-native-config) |
| [ESLint](http://eslint.org) | Linter used on the project. - [+ info](#eslint)|
| [i18n](https://github.com/AlexanderZaytsev/react-native-i18n) | Support to i18n. - [+ info](#i18n)|
| [Jest](https://facebook.github.io/jest/) | Testing (with coverage). - [+ info](#jest)|
| [Codacy](https://www.codacy.com) | Code review an analytics. - [+ info](#codacy)|
| [Storybook](https://storybook.js.org) | Testing for React-Native UI components. - [+ info](#storybook)|
| [Flow](https://flow.org) | Type checker for Javascript (with flowcheck). - [+ info](#flow)|
| [Sentry](https://sentry.io/welcome/) | Realtime error tracking. - [+ info](#sentry)|
| [NewRelic](https://newrelic.com/mobile-monitoring) | App monitoring. - [+ info](#newrelic)|
| [Reactotron](https://github.com/infinitered/reactotron) | Debug tool for React Native apps. - [+ info](#reactotron) |
| | |
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| [Redux-saga](https://github.com/redux-saga/redux-saga) | Is a library that aims to make side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better. |
| [Apisauce](https://github.com/skellock/apisauce) | Great form to communicate with APIs. |
| [Gulp](http://gulpjs.com) | Toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something. |

## Configuration
### **DOTENV**
This module reads `.env` files from the root folder, stores their variables in a `process.env` object.

#### How to use
```
require('dotenv').config()
console.log(process.env.APP_VERSION_CODE)
```
Use this way to access to the enviroment variables from outside the react-native application (eg. On the tests folder, or on the gulp file)
### **REACT-NATIVE-CONFIG**
This module is used to expose configuration variables to your javascript code inside the react-native application.
#### How to use
  Android

  * **Java files** - Through the BuildConfig object.
  ```
  public HttpURLConnection getApiClient() {
      URL url = new URL(BuildConfig.API_URL);
      // ...
  }
  ```

  * **Gradle configuration files** - Through the project.env.get() function.
  ```
  defaultConfig {
      applicationId project.env.get("APP_ID")
  }
  ```

  * **XML configuration files** (eg. `AndroidManifest.xml`)- Through the @string annotation.
  ```
  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="@string/GOOGLE_MAPS_API_KEY" />
  ```
### **ESLINT**
Linter used to check syntax errors on the code, it uses a config file called `.eslintrc` stored on the root folder.

The `.eslintignore` (also stored on the root folder) is used to ignore specific folders or files, like a .gitignore file 
#### How to use
**Run on the console:** `npm run superlint`
### **I18N**
Internationalization for the project. The languages are stored on `app/i18n/languages`, on `.json` files, and must be exported on `app/i18n/index.js` 
#### How to use
```
import I18n from 'app/i18n'
{ I18n.t('greetings') }
```
### **JEST**
This project uses Jest for unit testing. All tests live on the `tests` folder
#### How to use
**Run on the console:** `npm run test`

It creates a Coverage folder, which tell you the percentage of your code which is tested and is used to report it to Codacy 
### **CODACY**
Codacy check code style, security, duplication, complexity and quality on every commit. You must integrate it with your repository.

**Coverage** - To send to Codacy the coverage info created by Jest, there are a Gulp script (`gulpfile.js`) that use the "PROJECT_TOKEN" of your Codacy project. This "PROJECT_TOKEN" must be setted on your `.env` file like `CODACY_SECRET_TOKEN` 

#### How to use
**Run on the console:** `npm run gulp`

(Coverage folder must exist)
### **STORYBOOK**
With this, you can test all your UI components on realtime.
#### How to use
* Run your preffer Android emulator or connect your phone with the Debugging Mode enabled
* **Run on the console:** `npm run storybook`
* Visit `localhost:7007` on your browser
### **FLOW**
It check the typed of all your Javascript code, and uses a config file called `.flowconfig` stored on the root folder.

You must indicate which files want to be checked with the `@flow` annotation on top of your files.
#### How to use
**Run on the console:** `npm run flow`

If you use VSCode editor, it's recommended install "Flow Language Support" extension. 
### **SENTRY**
This project is configurated to report all its errors on production to be tracked by Sentry.
#### How to use
On your `.env` file, must exist this vars, according to your Sentry project information:
```
SENTRY_DSN
SENTRY_URL
SENTRY_ORG
SENTRY_PROJECT
```
On `app/config/index.js:18` is enabled the use of this system.
### **NEWRELIC**
This project is configurated to be monitored by New Relic.
#### How to use
Add the following NewRelic variable on the `.env` file:
```
NEWRELIC_ANDROID_TOKEN
```
Enable `app/config/index.js:19` to be used in the system.
### **REACTOTRON**
The functionality of this app can be inspectioned by Reactotron.
#### How to use
* [Install Reactotron](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)
* Open the Reactotron app
* Run your preffer Android emulator or connect your phone with the Debugging Mode enabled
* **Run on the console:** `npm run reactotron:server`

## :closed_lock_with_key: Secrets

This project uses [react-native-config](#react-native-config) to expose config variables to your code in React Native app, and [dotenv](#dotenv) to expose them outside the React Native app. You must store API keys and other sensitive information in a `.env` file, on the root folder.

The minimum variables required by this project are:

```
APP_VERSION_CODE /*Version code of your Android app eg. 0.0.1*/
APP_VERSION_NAME /*Version name of your Android app eg. v0.1-beta*/
GITHUB_API_URL=https://api.github.com/
```

The `.env` file is ignored by git keeping those secrets out of your repository.

Made with ❤️ by [Liftit](https://liftit.co) - Developed by [David Quinto](https://github.com/davidquinto)

## Missing work
1. Improve the README.md of Sagas, Redux and Screens.
2. Change README's system to [GitHub Wiki](https://help.github.com/articles/about-github-wikis/).

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## License
MIT ©

Copyright 2017 [Liftit](https://liftit.co)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.