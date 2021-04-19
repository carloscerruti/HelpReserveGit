import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePicker from 'react-native-image-picker';


export default function CadastroEstab({ navigation }) {
    return (
        <View style={css.container}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : 'height'} style={[css.container, css.lightbg]}>

                <View style={css.login_form}>
                    <TextInput
                        placeholder='Nome do estabelecimento'
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Dono do estabelecimento'
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Endereço'
                        style={css.signup_input} />
                    <TextInput
                        placeholder='Telefone'
                        keyboardType='numeric'
                        style={css.signup_input} />
                    <TextInput
                        placeholder='CNPJ'
                        keyboardType='numeric'
                        style={css.signup_input} />
                    <TextInput
                        placeholder='E-mail'
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

                    <TouchableOpacity style={css.estab_button}
                        onPress={() => ImagePicker.launchImageLibrary()} >
                        <Text style={css.estab_text}>Escolher imagem</Text>
                    </TouchableOpacity>



                </View>
                <TouchableOpacity style={css.login_button}>
                    <Text style={css.button_text}
                        onPress={() => Alert.alert('Estabelecimento cadastrado com sucesso!')}>Cadastrar</Text>

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

    estab_button:{
        padding: 6,
        width: 80,
        height: 50,
        marginTop: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 2,
        borderWidth: 3,
    },

    estab_text:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        textAlign: 'justify',
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
        backgroundColor: '#fff',
        justifyContent: 'center',
        resizeMode: 'cover',
    },

});