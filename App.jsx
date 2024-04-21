import React from 'react';
import Task from './component/Task.js';
import Greeting from './component/Greeting.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './component/TaskDetails.js';


const Stack = createStackNavigator();



export default App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Greeting} options={{ headerShown: false }} />
        <Stack.Screen name="NewTask" component={Task}  options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={Details}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}