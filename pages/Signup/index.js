import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, View, Image, ImageBackground, KeyboardAvoidingView, Platform, Linking } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { cpf } from 'cpf-cnpj-validator';
import { CheckBox, Text } from 'react-native-elements';

const Stack = createStackNavigator();

export default function Signup({ navigation }) {

    const [nome, setNome] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [cpf, setCPF] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password1, setPassword1] = useState(null)
    const [isSelected, setSelected] = useState(false)

    const salvar = () => {
        /*console.log(nome)
        console.log(endereco)
        console.log(telefone)
        console.log(cpf)
        console.log(email)
        console.log(password)
        console.log(password1)*/
        Alert.alert('Usuário cadastrado com sucesso!')
    }

    return (
        <View style={css.container}>
            <Text style={css.cadastre_se}>Cadastre-se</Text>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : 'height'} style={[css.container, css.lightbg]}>

                {/* <View>
                <Image
                  source={require('../assets/helpreserve.png')}
                  style={css.logo_img} />
                </View>*/}

                <View style={css.login_form}>
                    <TextInput
                        placeholder='Nome Completo'
                        onChangeText={value => setNome(value)}
                        returnKeyType="done"
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Endereço'
                        onChangeText={value => setEndereco(value)}
                        returnKeyType="done"
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Telefone'
                        keyboardType='phone-pad'
                        onChangeText={value => setTelefone(value)}
                        returnKeyType="done"
                        style={css.signup_input} />
                    <TextInput
                        placeholder='CPF'
                        keyboardType='numeric'
                        onChangeText={value => setCPF(value)}
                        returnKeyType="done"
                        style={css.signup_input} />
                    <TextInput
                        placeholder='E-mail'
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoCompleteType='email'
                        onChangeText={value => setEmail(value)}
                        returnKeyType="done"
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Senha'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={value => setPassword(value)}
                        returnKeyType="done"
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Digite novamente a senha'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={value => setPassword1(value)}
                        returnKeyType="done"
                        style={css.signup_input} />


                    <CheckBox
                        title="Eu aceito os termos de uso"
                        checkedIcon="check"
                        checkedColor="green"
                        uncheckedColor="red"
                        uncheckedIcon="square-o"
                        checked={isSelected}
                        onPress={() => setSelected(!isSelected)}
                    />

                </View>
                <TouchableOpacity style={css.login_button}>
                    <Text style={css.button_text}
                        onPress={() => salvar()}>Cadastrar</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>

    );

}

const css = StyleSheet.create({
    lightbg: {
        resizeMode: 'contain',
        alignItems: 'center'
    },

    cadastre_se: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15
    },

    signup_input: {
        backgroundColor: '#FFF',
        fontSize: 15,
        padding: 7,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
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
        alignSelf: 'center'
    },

    login_button: {
        padding: 8,
        width: 200,
        height: 45,
        marginTop: 35,
        marginBottom: 15,
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

    logo_img: {
        width: 250,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 10,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        resizeMode: 'cover',
    },

});