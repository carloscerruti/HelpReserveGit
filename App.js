import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button,Alert, TouchableOpacity, StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Platform, Linking } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

function condition_login (TextInput){
  if(TextInput == null)
  {
    <View>
      <Text style={css.login_msg_error}>Usuário ou senha inválido</Text>
    </View>
  }
}

export default class App extends Component {
  render() {
    return (
      <View source={css.main_form}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : 'height'} style={[css.container, css.lightbg]}>

          <View>
            <Image
              source={require('./assets/helpreserve.png')}
              style={css.logo_img} />
          </View>

          <View style={css.login_form}>
            <TextInput
              placeholder='Email'
              textContentType='emailAddress'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              autoCompleteType='email'
              style={css.login_input_email} />
            <TextInput
              placeholder='Senha'
              secureTextEntry={true}
              style={css.login_input_senha} />

            {/*<View>
            <Text style={css.login_msg_error}>Usuário ou senha inválido</Text>
          </View>*/}

            <TouchableOpacity style={css.login_button}>
              <Text style={css.button_text}>Entrar</Text>

            </TouchableOpacity>

            <View source={css.view_cadastro}>
              <Text style={css.msg_cadastro}>Não é cadastrado?⠀
              <Text style={css.click_cadastro}
                  // onPress={() => navigation.navigate('About')
                  onPress={() => Linking.openURL('http://google.com')}>
                  Clique aqui!
                </Text>
              </Text>
            </View>
            <View>
              <Text style={css.click_senha}
                // onPress={() => navigation.navigate('About')
                onPress={() => Linking.openURL('http://google.com')}>
                Esqueci minha senha
                </Text>
            </View>

            <View source={css.estab_container}>
              <Text style={css.msg_cadastro}>
                Possui um estabelecimento?
              </Text>

              <TouchableOpacity style={css.estab_button}>
                <Text style={css.estab_button_text}>Cadastrar</Text>
              </TouchableOpacity>


            </View>

          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const css = StyleSheet.create({
  lightbg: {
    backgroundColor: '#FFF',
  },
  estab_button: {
    width: 100,
    height: 30,
    backgroundColor: '#F29F05',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },

  estab_button_text: {
    paddingTop: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },

  estab_container: {
    flexDirection: 'row',
    flex: 1,
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
    fontWeight: 'bold',
    marginTop: 30,
    alignSelf: 'center'
  },

  logo_img: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 120,
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

});