import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, View, Image, ImageBackground, KeyboardAvoidingView, Platform, Linking } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


export default function Recuperarsenha({ navigation }) {
    const [email, setEmail] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)

    const validar = () => {
        let error = false
        setErrorEmail(null)


        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!re.test(String(email).toLowerCase()) || email == null) {
            setErrorEmail("Email Inválido")
            error = true
        }

        return !error
    }

    const validacao = () => {
        if (validar()) {
            console.log(email)
            Alert.alert("Senha enviada para seu endereço de email")
        }
    }

    const cadastro = () => {
        navigation.navigate("Signup")
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : 'height'}
            style={[css.lightbg, css.container]}>

            <Text style={css.recup_senha}>Recuperar Senha</Text>
            <View style={css.login_form}>
                <Input
                    placeholder='E-mail'
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    onChangeText={value => {
                        setEmail(value)
                        setErrorEmail(null)
                    }
                    }
                    errorMessage={errorEmail} />

                <TouchableOpacity style={css.senha_button}
                    onPress={() => validacao()}>
                    <Text style={css.button_text}>Enviar</Text>
                </TouchableOpacity>


                <Text style={css.ou}>
                    OU
                        </Text>


                <View>
                    <Text style={css.click_senha}
                        onPress={() => cadastro()}>
                        Criar nova conta
                        </Text>
                </View>

            </View>
        </KeyboardAvoidingView>

    );

}

const css = StyleSheet.create({
    lightbg: {
        backgroundColor: '#fff',
    },

    recup_senha: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 35,

    },

    ou: {
        color: 'grey',
        fontWeight: 'bold',
        marginTop: 15,
        alignSelf: 'center',
        fontSize: 22,

    },

    click_senha: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: 15,
        alignSelf: 'center',
        fontSize: 16,
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
        marginTop: 25,
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

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

});