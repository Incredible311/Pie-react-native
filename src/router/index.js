import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Signup from '../Screens/Signup';
import Splash from '../Screens/Splash';
import Landing from '../Screens/Landing';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Main: {
      screen: Signup
    },
    Landing: {
      screen: Landing
    }
  },

  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      headerBackTitle: ' ',
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(AppNavigator);
