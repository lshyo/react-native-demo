import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ButtonTabs from './ButtonTabs';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';

export type RootStackList = {
  StackHome: undefined;
};
export type NavigationProp = StackNavigationProp<RootStackList>;
const Stack = createStackNavigator<RootStackList>();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: 'float',
          headerTitleAlign: 'left',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="StackHome"
          component={ButtonTabs}
          options={{title: '厦门市'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Index;
