// StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Login';
import Reigister from '../Screen/Reigister';
import Premierpage from '../Premierpage';
import Example from '../Example';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Premier" component={Premierpage} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Principal" component={Example} options={{headerShown:false}}/>
    
      {/* <Stack.Screen name="Register" component={Reigister} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
