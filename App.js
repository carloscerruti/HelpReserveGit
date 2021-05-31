import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/index';
import Signup from './pages/cadastroUser';
import Recuperarsenha from './pages/recuperarSenha';
import CadastroEstab from './pages/cadastroEstab';
import HomeUser from './pages/homeUser';
import LoginEstab from './pages/loginEstab';
import Detail from './pages/detailApplebees';
import HomeEstab from './pages/homeEstab';
import gerenciarMesas from './pages/gerenciarMesas';
import gerenciarReservas from './pages/gerenciarReservas';
import infoEstab from './pages/infoEstab';

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator /*screenOptions={{
        headerShown: false
      }}*/>
      {/*<Stack.Screen name="FirstScreen" component={FirstScreen} />*/}
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
        <Stack.Screen name="HomeUser" component={HomeUser} options={{ title: 'Bem vindo, '}}/>
        <Stack.Screen name="LoginEstab" component={LoginEstab} 
        options={{
          headerStyle: {
            backgroundColor: '#750606',
          },
          title: 'Login de Estabelecimento',
          headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="HomeEstab" component={HomeEstab}         
        options={{
          headerStyle: {
            backgroundColor: '#750606',
          },
          title: 'Entrada estabelecimento',
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="gerenciarMesas" component={gerenciarMesas} options={{ title: 'Gerenciar mesas' }} />
        <Stack.Screen name="gerenciarReservas" component={gerenciarReservas} options={{ title: 'Gerenciar reservas' }} />
        <Stack.Screen name="infoEstab" component={infoEstab} 
        options={{ 
        title: 'Informaçoes do estabelecimento',
        headerTitleStyle: {
          fontSize: 18,
        },
         }} />
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

