import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Signup from '../Screens/Signup';
import Splash from '../Screens/Splash';
import Landing from '../Screens/Landing';
import ContentView from '../Screens/ContentView';
import UserView from '../Screens/UserView';
import Influencer from '../Screens/Influencer';
import UserFeed from '../Screens/UserFeed';
import Questions from '../Screens/Questions';
import Scorecard from '../Screens/Scorecard';
import Schedule from '../Screens/Schedule';

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
    },
    ContentView: {
      screen: ContentView
    },
    UserView: {
      screen: UserView
    },
    Influencer: {
      screen: Influencer
    },
    UserFeed: {
      screen: UserFeed
    },
    Questions: {
      screen: Questions
    },
    Scorecard: {
      screen: Scorecard
    },
    Schedule: {
      screen: Schedule
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
