import React, { useState, useRef } from 'react';
import 'react-native-gesture-handler';
import { Alert, TouchableOpacity, StyleSheet, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, Input } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

const Stack = createStackNavigator();

export default function Signup({ navigation }) {

    const [nome, setNome] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [cpf, setCPF] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password1, setPassword1] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)
    const [errorCPF, setErrorCPF] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorPassword1, setErrorPassword1] = useState(null)
    const [errorCadastro, setErrorCadastro] = useState(null)
    const [valueGenero, setValueGenero] = useState(null);
    const [ErrorGenero, setErrorGenero] = useState(false)
    const [datanasc, setDataNasc] = useState(null)
    const [errorDatanasc, setErrorDataNasc] = useState(null)
    const cpfRef = useRef(null)
    const telRef = useRef(null)


    const validar = () => {

        let error = false
        setErrorNome(null)
        setErrorTelefone(null)
        setErrorCPF(null)
        setErrorEmail(null)
        setErrorPassword(null)
        setErrorPassword1(null)
        setErrorCadastro(null)
        setErrorGenero(null)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const unmaskCPF = cpfRef?.current.getRawValue();
        const unmaskTEL = telRef?.current.getRawValue();

        const cpfIsValid = cpfRef?.current.isValid();

        if (!nome) {
            setErrorNome("Preencha seu nome corretamente")
            error = true
        }

        if (nome != null) {
            if (nome.length < 5) {
                setErrorNome("Preencha o nome corretamente")
                error = true
            }
        }

        if (!telefone) {
            setErrorTelefone("Preencha seu telefone corretamente")
            error = true
        }

        if (telefone != null) {
            if (telefone.length < 14) {
                setErrorTelefone("Preencha o telefone corretamente")
                error = true
            }
        }

        if (!unmaskCPF || !cpfIsValid) {
            setErrorCPF("Preencha seu CPF corretamente")
            error = true
        }

        if (cpf != null) {
            if (cpf.length < 14) {
                setErrorCPF("Preencha o CPF corretamente")
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
                setErrorPassword("Sua senha deve conter pelo menos 8 caracteres com letras e números")
                error = true
            }

            else {
                if (password != password1) {
                    setErrorCadastro("Senhas não correspondem")
                    error = true
                }
            }
        }

        if (!valueGenero) {
            setErrorGenero("Selecione um gênero")
            error = true
        }
        return !error
    }

    const salvar = () => {

        const unmaskCPF = cpfRef?.current.getRawValue();
        const unmaskTEL = telRef?.current.getRawValue();

        if (validar({ navigation })) { 
            /* 
            console.log({
                nome,
                unmaskTEL,
                unmaskCPF,
                password,
                valueGenero
            })   */
                        
            axios.post('http://192.168.0.19:4545/cad_user', {
                nome: nome,
                telefone: unmaskTEL,
                cpf: unmaskCPF,
                email: email,
                password: password,
                genero: valueGenero,
            }).then((response) => {
                console.log('Usuário cadastrado com sucesso!');
                Alert.alert('Usuário cadastrado com sucesso!');
               
            })
                .catch((error) => {
                    //console.log(error.response.data.message);
                    Alert.alert("Erro ao realizar cadastro");     
                    console.log("Erro ao realizar cadastro");               
                })           
        }
    }

    /*const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };*/

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);

    

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : 'height'}
            style={css.container}
            keyboardVerticalOffset={70}>
            <ScrollView >
                <Text style={css.cadastre_se}>Cadastre-se</Text>

                <View style={css.login_form}>

                    <Text style={css.namesInput}>Nome</Text>

                    <View style={css.inputArea}>
                        <TextInput
                            placeholder='Nome Completo'
                            autoCapitalize='sentences'
                            onChangeText={value => {
                                setNome(value)
                                setErrorNome(null)
                            }}
                            returnKeyType="done"
                            style={css.signup_input} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorNome}</Text>
                    </View>

                    <Text style={css.namesInput}>Celular ou Telefone</Text>

                    <View style={css.inputArea}>
                        <TextInputMask
                            placeholder="Celular ou Telefone"
                            type={'cel-phone'}
                            keyboardType="number-pad"
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            value = {telefone}
                            onChangeText={(telefone) => {
                                setTelefone(telefone)
                                setErrorTelefone(null)
                            }}
                            returnKeyType="done"
                            ref={telRef}
                            style={css.maskedInput} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorTelefone}</Text>
                    </View>

                    <Text style={css.namesInput}>CPF</Text>

                    <View style={css.inputArea}>
                        <TextInputMask
                            placeholder='CPF'
                            type={'cpf'}
                            value={cpf}
                            keyboardType="number-pad"
                            onChangeText={(cpf) => {
                                setCPF(cpf)
                                setErrorCPF(null)
                            }}
                            returnKeyType="done"
                            ref={cpfRef}
                            style={css.maskedInput}
                        />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorCPF}</Text>
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

                    <View style={css.inputArea}>
                        <TextInput
                            placeholder='Senha'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            value = {password}
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

                    <View style={css.inputArea}>
                        <TextInput
                            placeholder='Digite novamente a senha'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            value={password1}
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

                    {/*<View>
                        <TouchableOpacity style={css.login_button}
                            onPress={showDatepicker}>
                            <Text style={css.button_text}>Data</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}*/}

                    <Text style={css.namesInput}>Gênero</Text>

                    <RadioButton.Group onValueChange={newValue => setValueGenero(newValue)}
                        value={(valueGenero)}>
                        <View style={css.radioGenero}>
                            <RadioButton value="F" color="red" />
                            <Text>Feminino</Text>
                            <RadioButton value="M" color="red" />
                            <Text>Masculino</Text>
                        </View>
                    </RadioButton.Group>
                    <View>
                        <Text style={css.errorMessage}>{ErrorGenero}</Text>
                    </View>
                </View>
                <TouchableOpacity style={css.login_button}
                    onPress={() => salvar()}>
                    <Text style={css.button_text}>Cadastrar</Text>
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

    radioGenero: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },

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