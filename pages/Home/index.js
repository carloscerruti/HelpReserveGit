import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { Alert, TouchableOpacity, StyleSheet, View, Image, KeyboardAvoidingView, Animated, Platform, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, Text } from 'react-native-elements';

export default function Home({ navigation }) {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }))
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({x: 275, y: 155}))

  useEffect(() => {

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
      }),

      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,        
      })
    ]).start();

  }, []);

  function keyboardDidShow() {
    
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {

    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 275,
        speed: 4,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100,
      }),
    ]).start();
  }


  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)

  const validar = () => {
    let error = false
    setErrorLogin(null)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(String(email).toLowerCase()) || email == null || password == null) {
      setErrorLogin("Usuário ou senha incorreto")
      error = true
    }

    return !error
  }

  const cadastrar = () => {
    navigation.navigate("Signup")
  }

  const forgetPassword = () => {
    navigation.navigate('Recuperarsenha')
  }

  const cadastroEstab = () => {
    navigation.navigate('CadastroEstab')
  }

  const entrar = () => {
    if (validar()) {
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeUser" }]
      })
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : 'height'}
      style={css.container}>

      <View style = {css.logo_img}>
        <Animated.Image
          style = {{
            width: logo.x,
            height: logo.y,
          }}
          source={require('C:/HelpReserve/assets/helpreserve.png')} />
      </View>


      <Animated.View
        style={[
          css.container, css.login_form,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}
      >
        <Input
          placeholder='E-mail'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCompleteType='email'
          onChangeText={value => {
            setEmail(value)
            setErrorLogin(null)
          }
          } />
        <Input
          placeholder='Senha'
          secureTextEntry={true}
          autoCapitalize='none'
          onChangeText={value => {
            setPassword(value)
            setErrorLogin(null)
          }
          }
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          errorMessage={errorLogin}
        />

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
            onPress={() => forgetPassword()}>
            Esqueci minha senha
                </Text>
        </View>

        <View source={css.estab_container}>
          <Text style={css.msg_cadastro_estab}>
            Possui um estabelecimento?
              </Text>

          <TouchableOpacity style={css.estab_button}
            onPress={() => cadastroEstab()}>
            <Text style={css.estab_button_text}>Cadastrar</Text>
          </TouchableOpacity>


        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );

}

const css = StyleSheet.create({
  
  estab_button: {
    width: 100,
    height: 30,
    backgroundColor: '#750606',
    alignItems: 'center',
    alignSelf: 'center',
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
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop: 5,
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