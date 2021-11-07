/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigator';
// import App from './src/navigator/ButtonTabs';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
