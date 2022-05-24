import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AlimentosScreen from './screens/Alimentos';
import ModalScreen from './screens/Modal';

const AppNavigator = createStackNavigator(
  {
    Alimentos: {
      screen: AlimentosScreen
    }
  },
  {
    initialRouteName: 'Alimentos'
  }
);

const RootStack = createStackNavigator(
  {
  Main: AppNavigator,
  Modal: ModalScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
export default createAppContainer(RootStack);