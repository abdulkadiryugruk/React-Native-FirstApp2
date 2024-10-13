import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoginPage,SignUpPage } from '../screens'

const Stack = createNativeStackNavigator();

const authStack = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Login'
    screenOptions={{headerShown:false}}
    >

      <Stack.Screen name='Login' component={LoginPage}/>
      <Stack.Screen name='SignUp' component={SignUpPage}/>

    </Stack.Navigator>
  )
}

export default authStack
