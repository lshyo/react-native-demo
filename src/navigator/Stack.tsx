import React from 'react';
import {View, Alert, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {getHeaderTitle} from '@react-navigation/elements';
import ButtonTabs from './ButtonTabs';
import {IconMore} from '../assets/iconfont';
import Location from '../pages/Location';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import {StackHeaderProps} from '@react-navigation/stack/lib/typescript/src/types';
import {RootStack} from '@/navigator/type';

export type NavigationProp = StackNavigationProp<RootStack>;
const Stack = createStackNavigator<RootStack>();

const MyHeader = ({navigation, route, options, back}: StackHeaderProps) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert('123');
      }}
      activeOpacity={1}
      style={styles.headerCont}>
      <Text style={styles.headerText}>
        {back ? <Text onPress={navigation.goBack}>返回</Text> : undefined}
        {title}
      </Text>
      <IconMore size={20} />
    </TouchableOpacity>
  );
};
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: MyHeader,
          // headerMode: 'float',
          // headerTitleAlign: 'left',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="StackHome"
          component={ButtonTabs}
          options={{title: '厦门市1'}}
        />
        {/*<Stack.Screen*/}
        {/*  name="Location"*/}
        {/*  component={Location}*/}
        {/*  options={{title: '厦门市'}}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerCont: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    color: '#363636',
    flexDirection: 'column',
    fontWeight: 'bold',
  },
});
export default Index;
