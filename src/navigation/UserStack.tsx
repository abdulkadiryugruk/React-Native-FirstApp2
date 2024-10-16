import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage, ProfilePage} from '../screens'

const userStack = () => {
  const Stack = createNativeStackNavigator();
  return (
<Stack.Navigator
initialRouteName='Home'
screenOptions={{headerShown:false}}
>
  <Stack.Screen name="Home" component={HomePage} />
  <Stack.Screen name="Profile" component={ProfilePage} />
</Stack.Navigator>
  )
}

export default userStack
