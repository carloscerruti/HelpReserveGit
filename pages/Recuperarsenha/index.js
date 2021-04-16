import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Platform, Linking } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Recuperarsenha({ navigation }) {
    return (
        <View style={css.main_form}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : 'height'} style={[css.container, css.lightbg]}>

                <View style={css.login_form}>
                    <TextInput
                        placeholder='Email'
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoCompleteType='email'
                        style={css.login_input_email} />

                    <TouchableOpacity style={css.senha_button}
                        onPress={() => Alert.alert('Senha enviada para seu email. Verifique sua caixa de entrada!')}>
                        <Text style={css.button_text}>Enviar</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        </View>

    );

}

const css = StyleSheet.create({
    lightbg: {
        resizeMode: 'contain',
        alignItems: 'center'
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

    login_input_email: {
        backgroundColor: '#FFF',
        fontSize: 15,
        padding: 7,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },

    senha_button: {
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