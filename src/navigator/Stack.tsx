import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import Home from '../pages/home/index';

import Monitoring from '../pages/monitoring';
import Setting from '../pages/setting';
export type RootStackList = {
  Home: undefined;
  Monitoring: undefined;
  Setting: undefined;
};
export type NavigationProp = StackNavigationProp<RootStackList>;
const Stack = createStackNavigator<RootStackList>();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'float',
          headerTitleAlign: 'center',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Monitoring" component={Monitoring} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Index;
