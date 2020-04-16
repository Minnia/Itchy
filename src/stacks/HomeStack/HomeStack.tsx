import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../navigation/navigationConstants';
import PageTwoScreen from '../../screens/Questionnaire';
import PageOneScreen from '../../screens/Questionnaire';
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={screens.PageOneScreen}>
      <Stack.Screen
        options={{headerShown: false}}
        name={screens.PageOneScreen}
        component={PageOneScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
