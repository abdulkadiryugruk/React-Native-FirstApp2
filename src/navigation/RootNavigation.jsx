import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';

import React from 'react'

const rootNavigation = () => {

  const { isAuth } = useSelector((state) => state.user);


  return (
<NavigationContainer independent= 'true'>

    {
      !isAuth 
          ? <AuthStack/>
          : <UserStack/>
    }

</NavigationContainer>
  )
}

export default rootNavigation
