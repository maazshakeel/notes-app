import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />   
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />   
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
