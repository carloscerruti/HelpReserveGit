import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox, Text, Input } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

const Stack = createStackNavigator();

export default function Signup({ navigation }) {

    const [nome, setNome] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [cpf, setCPF] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password1, setPassword1] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorEndereco, setErrorEndereco] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)
    const [errorCPF, setErrorCPF] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorPassword1, setErrorPassword1] = useState(null)
    const [errorCadastro, setErrorCadastro] = useState(null)
    const [isSelected, setSelected] = useState(false)

    let cpfField = null

    const validar = () => {
        let error = false
        setErrorNome(null)
        setErrorEndereco(null)
        setErrorTelefone(null)
        setErrorCPF(null)
        setErrorEmail(null)
        setErrorPassword(null)
        setErrorPassword1(null)
        setErrorCadastro(null)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        

        if (nome == null) {
            setErrorNome("Preencha seu nome corretamente")
            error = true
        }

        if (nome != null) {
            if (nome.length < 5) {
                setErrorNome("Preencha o nome corretamente")
                error = true
            }
        }

        if (endereco == null) {
            setErrorEndereco("Preencha seu endereço corretamente")
            error = true
        }

        if (telefone == null) {
            setErrorTelefone("Preencha seu telefone corretamente")
            error = true
        }

        if (telefone != null) {
            if (telefone.length < 14) {
                setErrorTelefone("Preencha o telefone corretamente")
                error = true
            }
        }

        if (cpf == null || cpfField.isValid()) {
            setErrorCPF("Preencha seu CPF corretamente")
            error = true
        }

        if (cpf != null) {
            if(cpf.length < 14){
            setErrorCPF("Preencha o CPF corretamente")
            error = true
            }
        }

        if (!re.test(String(email).toLowerCase()) || email == null) {
            setErrorEmail("Preencha seu e-mail corretamente")
            error = true
        }

        if (password == null) {
            setErrorPassword("Preencha sua senha corretamente")
            error = true
        }

        if (password != null) {
            if(password.length < 8){
            setErrorPassword("Sua senha deve conter pelo menos 8 caracteres")
            error = true
           }

            else {
                if (password != password1) {
                setErrorCadastro("Senhas não correspondem")
                error = true
                }
            }
        }

        return !error
    }

    const salvar = () => {
        if (validar()) {
            console.log(nome)
            console.log(endereco)
            console.log(telefone)
            console.log(cpf)
            console.log(email)
            console.log(password)
            console.log(password1)
            Alert.alert('Usuário cadastrado com sucesso!')
        }
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : 'height'}
            style={css.container}
            keyboardVerticalOffset = {5}>
            <ScrollView >
                <Text style={css.cadastre_se}>Cadastre-se</Text>

                <View style={css.login_form}>
                    <Input
                        placeholder='Nome Completo'
                        onChangeText={value => {
                            setNome(value)
                            setErrorNome(null)
                        }}
                        errorMessage={errorNome}
                        returnKeyType="done"
                        style = {css.signup_input} />
                    <Input
                        placeholder='Endereço'
                        onChangeText={value => {
                            setEndereco(value)
                            setErrorEndereco(null)
                        }}
                        errorMessage={errorEndereco}
                        returnKeyType="done"
                        style={css.signup_input} />
                    
                    <View style={css.containerMask}>
                        <TextInputMask
                            placeholder="Telefone"
                            type={'cel-phone'}
                            value={telefone}
                            keyboardType="number-pad"
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            onChangeText={value => {
                                setTelefone(value)
                                setErrorTelefone(null)
                            }}
                            returnKeyType="done"
                            style={css.maskedInput} />
                    </View>

                        <View>
                            <Text style={css.errorMessage}>{errorTelefone}</Text>
                        </View>

                    <View style={css.containerMask}>
                        <TextInputMask
                            placeholder='CPF'
                            type={'cpf'}
                            value={cpf}
                            keyboardType="number-pad"
                            onChangeText={value => {
                                setCPF(value)
                                setErrorCPF(null)
                            }}
                            returnKeyType="done"
                            ref={(ref) => cpfField = ref}
                            style = {css.maskedInput}
                        />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorCPF}</Text>
                    </View>

                    <Input
                        placeholder='E-mail'
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoCompleteType='email'
                        onChangeText={value => {
                            setEmail(value)
                            setErrorEmail(null)
                        }}
                        errorMessage={errorEmail}
                        returnKeyType="done"
                        style={css.signup_input} />
                    <Input
                        placeholder='Senha'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={value => {
                            setPassword(value)
                            setErrorPassword(null)
                        }}
                        errorMessage={errorPassword}
                        returnKeyType="done"
                        style={css.signup_input} />
                    <Input
                        placeholder='Digite novamente a senha'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={value => {
                            setPassword1(value)
                            setErrorPassword1(null)
                        }}
                        errorMessage={errorPassword1}
                        returnKeyType="done"
                        style={css.signup_input} />
                    
                    <View>
                        <Text style={css.errorMessage}>{errorCadastro}</Text>
                    </View>

                </View>
                <TouchableOpacity style={css.login_button}
                    onPress={() => salvar()}>
                    <Text style={css.button_text}
                    >Cadastrar</Text>
                </TouchableOpacity>

                
            </ScrollView>
        </KeyboardAvoidingView>

    );

}

const css = StyleSheet.create({

    cadastre_se: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 15,
    },

    errorMessage: {
        fontSize: 12,
        color: "#f00",
        marginLeft: 15,
        alignSelf: 'flex-start',
    },

    maskedInput: {
        flexGrow: 1,
        height: 40, 
        fontSize: 12,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        alignSelf: 'flex-start'
    },

    containerMask: {
        flexDirection: 'row',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },

    signup_input: {
        fontSize: 12,
        marginTop: 3,
        borderColor: '#999'
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
    },

});