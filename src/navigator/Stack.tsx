import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {getHeaderTitle} from '@react-navigation/elements';
import ButtonTabs from './ButtonTabs';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import {StackHeaderProps} from '@react-navigation/stack/lib/typescript/src/types';

export type RootStackList = {
  StackHome: undefined;
};
export type NavigationProp = StackNavigationProp<RootStackList>;
const Stack = createStackNavigator<RootStackList>();

const MyHeader = ({navigation, route, options, back}: StackHeaderProps) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <View>
      <Text style={options.headerStyle}>
        {back ? <Text onPress={navigation.goBack}>返回</Text> : undefined}
        {title}
      </Text>
    </View>
  );
};
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: MyHeader,
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
