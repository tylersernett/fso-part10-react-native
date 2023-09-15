hoursB: 1+1+2 + 2 + 1 = 7
hoursC: 3
# Steps
1. initialize w create-expo-app:
`npx create-expo-app rate-repository-app --template expo-template-blank@sdk-46`

2. move to directory, install dependencies:
`npx expo install react-native-web@~0.18.7 react-dom@18.2.0 @expo/webpack-config@^0.17.0`

3. npm start: runs Metro bundler (≈ Webpack for React Native)

(if error `error:03000086:digital envelope routines::initialization`, nvm use 16.20.0)

press w to launch in web browser

(if weird lint error, move parser into parserOptions in eslintrc)
```js
"parserOptions": {
    "ecmaVersion": 2015 ,
    "parser": "@babel/eslint-parser",
    "sourceType": "module",
    "requireConfigFile": false
  },
```

# debugger
1. launch react native debugger
2. cmd+T ... then set port (19000 default)
3. open emulator, bring up options: cmd+ctrl+z, then Debug Remote JS