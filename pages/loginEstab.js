import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { TouchableOpacity, StyleSheet, View, KeyboardAvoidingView, Animated, Platform, Keyboard, TextInput, LogBox } from 'react-native';
import { Text } from 'react-native-elements';
import { Ionicons, Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function LoginEstab({ navigation }) {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }))
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({ x: 275, y: 155 }))
  const [cnpj, setCNPJ] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState(null)
  const [hidePass, setHidePass] = useState(true)

  useEffect(() => {
    
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

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
        toValue: 120,
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

  const validar = () => {
    let error = false
    setErrorLogin(null)

    if (cnpj == '' || password == ''){
      setErrorLogin("CNPJ ou senha incorreto")
      error = true
    }
      

    return !error
  }

  const cadastroEstab = () => {
    navigation.navigate('CadastroEstab')
  }

  const entrar = () => {
    
    if (validar()) {
     
      console.log({
        cnpj,
        password
      })     
    
      axios.post('http://192.168.0.19:4545/estabel',({
        cnpj: cnpj,
        password: password,
      })).then((response) => {
        console.log(response.data)
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeEstab" }]
        })                
      })
      .catch(error => {
        console.log(error.response.data.message);
        setErrorLogin("CNPJ ou senha incorreta")
      })
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : 'height'}
      style={css.container}>        

      <View style={css.logo_img}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../assets/helpreserve.png')} />
      </View>
      <Animated.View
          style={[
            css.login_form,
            {
              opacity: opacity,
              transform: [
                { translateY: offset.y }
              ]
            }
          ]}
        >
        <View style={css.inputArea}>
            <Ionicons name="person-circle-outline" size={20} style = {css.icon}/>

          <TextInput

            style={css.input}
            placeholder='CNPJ'
            keyboardType='number-pad'
            autoCapitalize='none'
            value={cnpj}
            onChangeText={(texto) => {
              setCNPJ(texto)
              setErrorLogin(null)
            }
            } />
        </View>

        <View style={css.inputArea}>

          <Ionicons name="lock-open-outline" size={20} />
         
          <TextInput
            style={css.input}
            placeholder='Senha'
            secureTextEntry={hidePass}
            autoCapitalize='none'
            value={password}
            onChangeText={(texto1) => {
              setPassword(texto1)
              setErrorLogin(null)
            }
            }
            
          />

          <TouchableOpacity style={css.icon}
            onPress={() => setHidePass(!hidePass)}>
            {hidePass ?
              <Icon name="eye" size={25} />
              :
              <Icon name="eye-off" size={25} />
            }
          </TouchableOpacity>

        </View>

        <View>
          <Text style={css.errorMessage}>{errorLogin}</Text>
        </View>

        <TouchableOpacity style={css.login_button}
          onPress={() => entrar()}>
          <Text style={css.button_text}>Entrar</Text>
        </TouchableOpacity>

        <View source={css.view_cadastro}>

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

  inputArea: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: '#121212',
    borderBottomWidth: 1,
    alignItems: 'center'
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '85%',
    height: 50,
    color: 'black',
    padding: 8
  },

  errorMessage: {
    fontSize: 12,
    color: "#f00",
    marginLeft: 10,
    alignSelf: 'flex-start',
},

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
    marginTop: 10,
    alignSelf: 'center'
  },

  logo_img: {
    resizeMode: 'cover',
    justifyContent: 'center',
    marginBottom: 5,
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
    marginTop: 8,
    alignSelf: 'center',
    fontSize: 15,
  },

  click_estab: {
    paddingTop: 15,
    color: '#750606',
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});