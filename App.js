import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MealScreen from './components/screen/MealScreen';
import Modal from './components/modal/Modal';

const AppNavigator = createStackNavigator({
  Meals: {
    screen: MealScreen
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

export default createAppContainer(RootStack);