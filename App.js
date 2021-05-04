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
      <Stack.Navigator /*screenOptions={{
        headerShown: false
      }}*/>
      <Stack.Screen
        name="Login"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#750606',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Cadastro de usuário' }} />
        <Stack.Screen name="Recuperarsenha" component={Recuperarsenha} options={{ title: 'Recuperação de senha' }} />
        <Stack.Screen name="CadastroEstab" component={CadastroEstab} options={{ title: 'Cadastro de estabelecimento' }} />
        <Stack.Screen name="HomeUser" component={HomeUser} options={{ title: 'Entrada' }}/>
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

