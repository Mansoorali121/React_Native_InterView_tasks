/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Cn_AP_Task from './src/Screens/Cn_AP_Task';
import Names_Task from './src/Screens/Names_Task';

AppRegistry.registerComponent(appName, () => Names_Task);
