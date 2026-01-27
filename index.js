/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Cn_AP_Task from './src/Screens/Cn_AP_Task';
import Names_Task from './src/Screens/Names_Task';
import Task3 from './src/Screens/Task3';
import Text_Input_Display from './src/Screens/Text_Input_Display';

AppRegistry.registerComponent(appName, () => Text_Input_Display);
