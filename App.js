import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoginScreen from './screens/Login';
import RegistroScreen from './screens/Registro';

import AlimentosScreen from './screens/Alimentos';
import ModalScreen from './screens/Modal';

import AuthLoading from './screens/AuthLoading';

const OnBoardingNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Registro:RegistroScreen,
  }, {
    initialRouteName: 'Login'
  }
)
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
const BaseStack = createSwitchNavigator(
  {
    AuthLoading:AuthLoading,
    OnBoarding: OnBoardingNavigator,
    Root: RootStack,
  }, {
    initialRouteName: 'AuthLoading'
  }
)
export default createAppContainer(BaseStack);