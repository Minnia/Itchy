import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../navigation/navigationConstants';
import Questionnaire from '../../screens/Questionnaire';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={screens.Questionnaire}>
      <Stack.Screen
        options={{headerShown: false}}
        name={screens.Questionnaire}
        component={Questionnaire}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
