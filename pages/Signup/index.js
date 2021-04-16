import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Platform, Linking } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Signup({ navigation }) {
    return (
        <View style={css.main_form}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : 'height'} style={[css.container, css.lightbg]}>

                {/* <View>
                <Image
                  source={require('../assets/helpreserve.png')}
                  style={css.logo_img} />
                </View>*/}

                <View style={css.login_form}>
                    <TextInput
                        placeholder='Nome Completo'
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Endereço'
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Telefone'
                        keyboardType='numeric'
                        style={css.signup_input} />
                    <TextInput
                        placeholder='CPF'
                        keyboardType='numeric'
                        style={css.signup_input} />
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
                    <TextInput
                        placeholder='Digite novamente a senha'
                        secureTextEntry={true}
                        style={css.login_input_senha} />



                </View>
                <TouchableOpacity style={css.login_button}>
                    <Text style={css.button_text}
                    onPress={() => Alert.alert('Usuário cadastrado com sucesso!')}>Cadastrar</Text>

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
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
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
        marginTop: 120,
    },

    main_form: {
        justifyContent: 'center',
        resizeMode: 'cover',
        marginTop: 25
    },

});