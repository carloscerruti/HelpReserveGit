import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, View, KeyboardAvoidingView, Platform, Linking, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox, Text, Input } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function CadastroEstab() {

    const [nomeEstab, setNomeEstab] = useState(null)
    const [dono, setDono] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [cnpj, setCNPJ] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password1, setPassword1] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [errorNomeEstab, setErrorNomeEstab] = useState(null)
    const [errorDono, setErrorDono] = useState(null)
    const [errorEndereco, setErrorEndereco] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)
    const [errorCNPJ, setErrorCNPJ] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorPassword1, setErrorPassword1] = useState(null)
    const [errorCadastro, setErrorCadastro] = useState(null)
    const [errorDescricao, setErrorDescricao] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [errorisSelected, setErrorIsSelected] = useState(false)
    const cnpjRef = useRef(null)
    const telRef = useRef(null)

    /*const escolherFoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
        });
    }*/

    const validar = () => {
        let error = false
        setErrorNomeEstab(null)
        setErrorDono(null)
        setErrorEndereco(null)
        setErrorTelefone(null)
        setErrorCNPJ(null)
        setErrorEmail(null)
        setErrorPassword(null)
        setErrorPassword1(null)
        setErrorCadastro(null)
        setErrorDescricao(null)
        setErrorIsSelected(false)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const unmaskCNPJ = cnpjRef?.current.getRawValue();
        const unmaskTEL = telRef?.current.getRawValue();

        const cnpjIsValid = cnpjRef?.current.isValid();

        if (!nomeEstab) {
            setErrorNomeEstab("Preencha o nome do estabelecimento")
            error = true
        }

        if (!dono) {
            setErrorDono("Preencha o nome corretamente")
            error = true
        }

        if (dono != null) {
            if (dono.length < 5) {
                setErrorDono("Preencha o nome completo do responsável")
                error = true
            }
        }

        if (!endereco) {
            setErrorEndereco("Preencha o endereço corretamente")
            error = true
        }

        if (!telefone) {
            setErrorTelefone("Preencha o telefone corretamente")
            error = true
        }

        if (telefone != null) {
            if (telefone.length < 14) {
                setErrorTelefone("Preencha o telefone corretamente")
                error = true
            }
        }

        if (!unmaskCNPJ || !cnpjIsValid) {
            setErrorCNPJ("Preencha o CNPJ corretamente")
            error = true

        }

        if (cnpj != null) {
            if (cnpj.length < 18) {
                setErrorCNPJ("Preencha o CNPJ corretamente")
                error = true
            }
        }

        if (!re.test(String(email).toLowerCase()) || email == null) {
            setErrorEmail("Preencha seu e-mail corretamente")
            error = true
        }

        if (!password) {
            setErrorPassword("Preencha sua senha corretamente")
            error = true
        }

        if (password != null) {
            if (password.length < 8) {
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

        if (!descricao) {
            setErrorDescricao("Este campo não pode estar vazio")
            error = true
        }

        if (!isSelected) {
            setErrorIsSelected("Aceite os termos de uso!")
            error = true
        }

        return !error
    }

    const salvar = () => {
        const unmaskCNPJ = cnpjRef?.current.getRawValue();
        const unmaskTEL = telRef?.current.getRawValue();

        if (validar()) {
            console.log(nomeEstab)
            console.log(dono)
            console.log(endereco)
            console.log(unmaskTEL)
            console.log(unmaskCNPJ)
            console.log(email)
            console.log(password)
            console.log(password1)
            console.log(descricao)
            Alert.alert('Estabelecimento cadastrado com sucesso!')
            
        }
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : 'height'}
            style={css.container}
            keyboardVerticalOffset={100}>
            <ScrollView >
                <Text style={css.cadastro}>Cadastro de Estabelecimento</Text>

                <View style={css.login_form}>
                    
                    <Text style={css.namesInput}>Nome do Estabelecimento</Text>

                    <View style={css.inputArea}>
                        <TextInput
                            placeholder='Nome do estabelecimento'
                            onChangeText={value => {
                                setNomeEstab(value)
                                setErrorNomeEstab(null)
                            }}
                            returnKeyType="done"
                            style={css.signup_input} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorNomeEstab}</Text>
                    </View>

                    <Text style={css.namesInput}>Nome do Responsável Legal</Text>

                    <View style={css.inputArea}>
                        <TextInput
                            placeholder='Nome do(a) responsável legal'
                                  
                            onChangeText={value => {
                                setDono(value)
                                setErrorDono(null)
                            }}
                            returnKeyType="done"
                            style={css.signup_input} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorDono}</Text>
                    </View>

                    <Text style={css.namesInput}>Endereço</Text>

                    <View style={css.inputArea}>
                        <TextInput
                            placeholder="Endereço"
                            onChangeText={value => {
                                setEndereco(value)
                                setErrorEndereco(null)
                            }}
                            returnKeyType="done"
                            style={css.signup_input} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorEndereco}</Text>
                    </View>

                    <Text style={css.namesInput}>Celular ou telefone</Text>

                    <View style={css.inputArea}>
                            <TextInputMask
                                placeholder="Celular ou Telefone"
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
                                ref={telRef}
                                style={css.maskedInput} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorTelefone}</Text>
                    </View>

                    <Text style={css.namesInput}>CNPJ</Text>

                    <View style={css.inputArea}>
                            <TextInputMask
                                placeholder='CNPJ'
                                type={'cnpj'}
                                value={cnpj}
                                keyboardType="number-pad"
                                onChangeText={value => {
                                    setCNPJ(value)
                                    setErrorCNPJ(null)
                                }}
                                returnKeyType="done"
                                ref={cnpjRef}
                                style={css.maskedInput}
                            />
                        </View>

                    <View>
                        <Text style={css.errorMessage}>{errorCNPJ}</Text>
                    </View>

                    <Text style={css.namesInput}>E-mail</Text>

                    <View style={css.inputArea}>
                        <TextInput
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
                        returnKeyType="done"
                        style={css.signup_input} />
                    </View>
                    
                    <View>
                        <Text style={css.errorMessage}>{errorEmail}</Text>
                    </View>
                    
                    <Text style={css.namesInput}>Senha</Text>

                    <View style = {css.inputArea}>
                        <TextInput
                            placeholder='Senha'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            onChangeText={value => {
                                setPassword(value)
                                setErrorPassword(null)
                            }}
                            returnKeyType="done"
                            style={css.signup_input} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorPassword}</Text>
                    </View>


                    <Text style={css.namesInput}>Confirmação de senha</Text>

                    <View style = {css.inputArea}>
                    <TextInput
                        placeholder='Digite novamente a senha'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={value => {
                            setPassword1(value)
                            setErrorPassword1(null)
                        }}
                        returnKeyType="done"
                        style={css.signup_input} />
                    </View>
                    
                    <View>
                        <Text style={css.errorMessage}>{errorCadastro}</Text>
                    </View>

                    <Text style={css.namesInput}>Razão social / Descrição</Text>
                    <TextInput
                        style={css.inputDetails}
                        placeholder="Razão social / Descrição"
                        onChangeText={value => {
                            setDescricao(value)
                            setErrorDescricao(null)
                        }}

                        returnKeyType="done"
                    />
                    <View>
                        <Text style={css.errorMessage}>{errorDescricao}</Text>
                    </View>

                    

                    {/*<TouchableOpacity style={css.estab_button}
                            onPress={() => escolherFoto()} >
                        </TouchableOpacity>*/}

                    <View>
                        <Text style={css.termosUso}
                            onPress={() => Linking.openURL('http://google.com')}>Termos de uso</Text>
                    </View>
                    <CheckBox
                        title="Li e aceito os termos de uso"
                        checkedIcon="check"
                        checkedColor="green"
                        uncheckedColor="red"
                        uncheckedIcon="square-o"
                        checked={isSelected}
                        onPress={() => {
                            setSelected(!isSelected)
                            setErrorIsSelected(false)
                        }}
                    />
                    <View>
                        <Text style={css.errorMessage}>{errorisSelected}</Text>
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

    inputArea: {
        backgroundColor: 'white',
        borderColor: '#121212',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        paddingLeft: 12,
        height: 30,
        marginTop: 2,
        justifyContent: 'center'
      },

    namesInput: {
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 12,
        marginTop: 5,
    },

    inputDetails: {
        paddingLeft: 12,
        marginLeft: 12,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'black',
        width: '90%',
        height: 100,
    },

    cadastro: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 15,
    },

    termosUso: {
        fontSize: 13,
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
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
        color: 'grey',
        alignSelf: 'flex-start',
        width: '100%'
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
        borderColor: '#999',
        color: 'grey',
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