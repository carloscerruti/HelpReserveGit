import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, View, Image, Text, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import Signup from '../Signup';

export default function Home({ navigation }) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const cadastrar = () =>{
    navigation.navigate("Signup")
  }

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeUser" }]
    })
  }


  return (
    <View style={css.container}>
     
    
        <View>
                <Image
                  source={require('C:/HelpReserve/assets/helpreserve.png')}
                  style={css.logo_img} />
        </View>

        <View style={css.login_form}>
          <Input
            placeholder='E-mail'
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            textContentType='emailAddress'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            autoCompleteType='email'
            onChangeText={value => setEmail(value)} />
          <Input
            placeholder='Senha'
            secureTextEntry={true}
            autoCapitalize='none'
            onChangeText={value => setPassword(value)}
            leftIcon={{ type: 'font-awesome', name: 'lock' }} />

          <TouchableOpacity style={css.login_button}
            onPress={() => entrar()}>
            <Text style={css.button_text}>Entrar</Text>
          </TouchableOpacity>

          <View source={css.view_cadastro}>
            <Text style={css.msg_cadastro}>Não é cadastrado?⠀
              <Text style={css.click_cadastro}
                onPress={() => cadastrar()}>
                Cadastre-se
                </Text>
            </Text>
          </View>
          <View>
            <Text style={css.click_senha}
              onPress={() => navigation.navigate('Recuperarsenha')}>
              Esqueci minha senha
                </Text>
          </View>

          <View source={css.estab_container}>
            <Text style={css.msg_cadastro_estab}>
              Possui um estabelecimento?
              </Text>

            <TouchableOpacity style={css.estab_button}
              onPress={() => navigation.navigate('CadastroEstab')}>
              <Text style={css.estab_button_text}>Cadastrar</Text>
            </TouchableOpacity>


          </View>

        </View>
    </View>
  );

}

const css = StyleSheet.create({
  lightbg: {
    resizeMode: 'contain',
    alignItems: 'center'
  },
  estab_button: {
    width: 100,
    height: 30,
    backgroundColor: '#750606',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius: 5,
    marginTop: 10,
  },

  estab_button_text: {
    paddingTop: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },

  estab_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 2
  },

  login_msg_error: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'red',
    marginTop: 5,
    alignSelf: 'center',
  },
  login_form: {
    width: '80%',
    alignSelf: 'center',
  },
  login_input_senha: {
    backgroundColor: '#FFF',
    fontSize: 15,
    padding: 7,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },

  login_input_email: {
    backgroundColor: '#FFF',
    fontSize: 15,
    padding: 7,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },

  login_button: {
    padding: 8,
    width: 200,
    height: 45,
    marginTop: 15,
    backgroundColor: '#BF0404',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'justify',
  },

  msg_cadastro: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 30,
    alignSelf: 'center'
  },

  msg_cadastro_estab: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 30,
    alignSelf: 'center'
  },

  logo_img: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 10,
  },

  bg: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
    alignItems: 'center'
  },

  view_cadastro: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  click_cadastro: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 15,
  },

  click_senha: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

});