import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './src/stacks/HomeStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="PageOne">
        <Stack.Screen name="-" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
