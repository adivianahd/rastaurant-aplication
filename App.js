import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/screen/Login'
import Register from './components/screen/Register'
import Meal from './components/screen/Meal';
import Modal from './components/modal/Modal';

const OnBoardingNavigator = createStackNavigator({
  Login: Login,
  Register: Register,
}, {
  initialRouteName: 'Login'
})

const AppNavigator = createStackNavigator({
  Meals: {
    screen: Meal
  }
}, {
  initialRouteName: 'Meals'
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal: Modal,
}, {
  mode: 'modal',
  headerMode: 'none',
})

const BaseStack = createSwitchNavigator({
  OnBoarding: OnBoardingNavigator,
  Root: RootStack,
}, {
  initialRouteName: 'OnBoarding'
})

export default createAppContainer(BaseStack);