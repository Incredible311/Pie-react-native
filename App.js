import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from "./src/Screens/Splash"
import Signup from "./src/Screens/Signup"
import Landing from './src/Screens/Landing';
import ContentView from './src/Screens/ContentView';
import UserView from './src/Screens/UserView';
import Influencer from './src/Screens/Influencer';
import UserFeed from './src/Screens/UserFeed';
import Questions from './src/Screens/Questions';
import Scorecard from './src/Screens/Scorecard';
import Schedule from './src/Screens/Schedule';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="ContentView" component={ContentView} />
        <Stack.Screen name="UserView" component={UserView} />
        <Stack.Screen name="Influencer" component={Influencer} />
        <Stack.Screen name="UserFeed" component={UserFeed} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="Scorecard" component={Scorecard} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;