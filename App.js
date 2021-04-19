import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home';
import Signup from './pages/Signup';
import Recuperarsenha from './pages/Recuperarsenha';
import CadastroEstab from './pages/CadastroEstab';
import HomeUser from './pages/HomeUser';

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Recuperarsenha" component={Recuperarsenha} />
        <Stack.Screen name="CadastroEstab" component={CadastroEstab} />
        <Stack.Screen name="HomeUser" component={HomeUser} />
      </Stack.Navigator>
    
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

