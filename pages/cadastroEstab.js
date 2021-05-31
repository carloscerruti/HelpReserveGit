import React, { useEffect, useRef, useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, View, KeyboardAvoidingView, Platform, Linking, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox, Text } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';

const Stack = createStackNavigator();

export default function CadastroEstab() {

    const [nome_estab, setNomeEstab] = useState(null)
    const [dono, setDono] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [bairro, setBairro] = useState(null)
    const [cidade, setCidade] = useState(null)
    const [cep, setCEP] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [telefoneResp, setTelefoneResp] = useState(null)
    const [cnpj, setCNPJ] = useState(null)
    const [cpf, setCPF] = useState(null)
    const [rg, setRG] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password1, setPassword1] = useState(null)
    const [razao_social, setRazaoSocial] = useState(null)
    const [errorNomeEstab, setErrorNomeEstab] = useState(null)
    const [errorDono, setErrorDono] = useState(null)
    const [errorEndereco, setErrorEndereco] = useState(null)
    const [errorBairro, setErrorBairro] = useState(null)
    const [errorCidade, setErrorCidade] = useState(null)
    const [errorCep, setErrorCEP] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)
    const [errorTelefoneResp, setErrorTelefoneResp] = useState(null)
    const [errorCNPJ, setErrorCNPJ] = useState(null)
    const [errorCPF, setErrorCPF] = useState(null)
    const [errorRG, setErrorRG] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorPassword1, setErrorPassword1] = useState(null)
    const [errorCadastro, setErrorCadastro] = useState(null)
    const [errorRazaoSocial, setErrorRazaoSocial] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [errorisSelected, setErrorIsSelected] = useState(false)
    const [selectedValueCat, setSelectedValueCat] = useState(null)
    const [selectedValueUF, setSelectedValueUF] = useState(null)
    const [errorSelectedValueCat, setErrorSelectedValueCat] = useState(null)
    const [errorSelectedValueUF, setErrorSelectedValueUF] = useState(null)
    const [categorias, setcategorias] = useState([])
    
    const cnpjRef = useRef(null)
    const telRef = useRef(null)
    const telrespRef = useRef(null)
    const cpfRef = useRef(null)   
    const rgRef = useRef(null)
    const cepRef = useRef(null)

    
    useEffect( () =>{
        setCategory();
    },[])

    /*useEffect( () =>{
        setInterval(function(){ 
            console.log("teste"); }
        , 3000);
    },[])
    
    useEffect( () =>{
        if (categorias.length > 0)
            console.log(categorias)
    },[categorias])*/

    const setCategory = () => {
        axios.post('http://192.168.0.19:4545/buscacategoria',
            ).then((response) => {                
                var formattedCat = [];
                for (var i = 0; i < response.data.length ; i++){
                    const category = response.data[i];
                    formattedCat.push({
                        value: category.desc_tipo,
                        label: category.desc_tipo,
                    })                                                            
                }  
                setcategorias(formattedCat);                
            })
            .catch((error) => {                
                console.log(error);
                Alert.alert('Erro ao cadastrar estabelecimento!');
            })
    }

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
        setErrorRazaoSocial(null)
        setErrorIsSelected(false)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const unmaskCNPJ = cnpjRef?.current.getRawValue();
        const unmaskTEL = telRef?.current.getRawValue();
        const unmaskTELRESP = telrespRef?.current.getRawValue();
        const unmaskCPF = cpfRef?.current.getRawValue();
        const unmaskRG = rgRef?.current.getRawValue();
        const unmaskCEP = cepRef?.current.getRawValue();

        const cpfIsValid = cpfRef?.current.isValid();
        const cnpjIsValid = cnpjRef?.current.isValid();

        if (!nome_estab) {
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

        if(!cep) {
            setErrorCEP("Preencha o CEP corretamente")
            error = true
        }

        if (cep != null) {
            if(cep.length < 9){
            setErrorCEP("Preencha o CEP corretamente")
            error = true
            }
        }

        if (!bairro) {
            setErrorBairro("Preencha o bairro corretamente")
            error = true
        }

        if (!cidade) {
            setErrorCidade("Preencha a cidade corretamente")
            error = true
        }

        if (!selectedValueUF) {
            setErrorSelectedValueUF("Selecione um estado")
            error = true
        }

        if (!selectedValueCat) {
            setErrorSelectedValueCat("Selecione uma categoria")
            error = true
        }

        if (!rg) {
            setErrorRG("Preencha o RG corretamente")
            error = true
        }

        if (rg != null) {
            if (rg.length < 7) {
                setErrorRG("Preencha o RG corretamente")
                error = true
            }
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

        if (!telefoneResp) {
            setErrorTelefoneResp("Preencha o telefone corretamente")
            error = true
        }

        if (telefoneResp != null) {
            if (telefoneResp.length < 14) {
                setErrorTelefoneResp("Preencha o telefone corretamente")
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

        if (!cpf || !cpfIsValid) {
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

        if (!razao_social) {
            setErrorRazaoSocial("Preencha a razão social corretamente")
            error = true
        }

        if (!isSelected) {
            setErrorIsSelected("Aceite os termos de uso!")
            error = true
        }

        return !error
    }

    const salvar = () => {
        const unmaskRG = rgRef?.current.getRawValue();
        const unmaskCNPJ = cnpjRef?.current.getRawValue();
        const unmaskTEL = telRef?.current.getRawValue();
        const unmaskTELRESP = telrespRef?.current.getRawValue();
        const unmaskCPF = cpfRef?.current.getRawValue();
        const unmaskCEP = cepRef?.current.getRawValue();

        if (validar()) {                        
            axios.post('http://192.168.0.19:4545/cad_estab', {
                nome_estab: nome_estab,
                endereco: endereco,
                telefone: unmaskTEL,
                telresp: unmaskTELRESP,
                cnpj: unmaskCNPJ,
                email: email,
                password: password,
                cep: unmaskCEP,
                bairro: bairro,
                cidade: cidade,
                uf: selectedValueUF, 
                cat: selectedValueCat,              
                dono: dono,
                razao_social: razao_social,
                cpf: unmaskCPF,
                rg: unmaskRG,
            }).then((response) => {
                console.log('Estabelecimento cadastrado com sucesso!');
                Alert.alert('Estabelecimento cadastrado com sucesso!');

            })
                .catch((error) => {
                    //console.log(error.response.data.message);
                    console.log('Erro ao cadastrar estabelecimento!');
                    Alert.alert('Erro ao cadastrar estabelecimento!');
                })

        }
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : 'height'}
            style={css.container}>
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

                    <Text style={css.namesInput}>Razão social do estabelecimento</Text>

                    <View style={css.inputArea}>
                    <TextInput
                        style={css.signup_input}
                        placeholder="Razão social"
                        onChangeText={value => {
                            setRazaoSocial(value)
                            setErrorRazaoSocial(null)
                        }}
                        returnKeyType="done"/>
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorRazaoSocial}</Text>
                    </View>

                    <Text style={css.namesInput}>Celular ou telefone do estabelecimento</Text>

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

                    <Text style={css.namesInput}>CPF do Responsável Legal</Text>

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

                    <Text style={css.namesInput}>RG do Responsável Legal</Text>

                    <View style={css.inputArea}>
                        <TextInputMask
                            placeholder="RG"
                            type={'custom'}
                            value={rg}
                            options={{
                                mask: '99.999.999-9'
                            }}
                            onChangeText={(rg) => {
                                setRG(rg)
                                setErrorRG(null)
                            }}
                            returnKeyType="done"
                            ref={rgRef}
                            style={css.signup_input} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorRG}</Text>
                    </View>


                     <Text style={css.namesInput}>Celular ou telefone do Responsável Legal</Text>

                    <View style={css.inputArea}>
                            <TextInputMask
                                placeholder="Celular ou Telefone"
                                type={'cel-phone'}
                                value={telefoneResp}
                                keyboardType="number-pad"
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                onChangeText={value => {
                                    setTelefoneResp(value)
                                    setErrorTelefoneResp(null)
                                }}
                                returnKeyType="done"
                                ref={telrespRef}
                                style={css.maskedInput} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorTelefoneResp}</Text>
                    </View>

                                
                    
                    <Text style={css.namesInput}>CEP</Text>

                    <View style={css.inputArea}>
                        <TextInputMask
                            placeholder="CEP"
                            type={'zip-code'}
                            value={cep}
                            keyboardType="number-pad"
                            onChangeText={(cep) => {
                                setCEP(cep)
                                setErrorCEP(null)
                            }}
                            returnKeyType="done"
                            ref={cepRef}
                            style={css.signup_input} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorCep}</Text>
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

                    <Text style={css.namesInput}>Bairro</Text>

                    <View style={css.inputArea}>
                        <TextInput
                            placeholder="Bairro"
                            onChangeText={value => {
                                setBairro(value)
                                setErrorBairro(null)
                            }}
                            returnKeyType="done"
                            style={css.signup_input} />
                    </View>

                    <View>
                        <Text style={css.errorMessage}>{errorBairro}</Text>
                    </View>
                    
                    
                     <Text style={css.namesInput}>Cidade</Text>
                   
                    

                    <View style={css.inputArea}>
                        <TextInput
                            placeholder="Cidade"
                            onChangeText={value => {
                                setCidade(value)
                                setErrorCidade(null)
                            }}
                            returnKeyType="done"
                            style={css.signup_input} />
                    </View>                                  

                    <View>
                        <Text style={css.errorMessage}>{errorCidade}</Text>
                    </View>

                    <Text style={css.namesInput}>UF</Text>

                    <Picker
                        selectedValue={selectedValueUF}
                        style={css.pickerSelectUF}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedValueUF(itemValue)
                            setErrorSelectedValueUF(null)
                        }}
                    >
                        <Picker.Item label=" " value={null} />
                        <Picker.Item label="AC" value="AC" />
                        <Picker.Item label="AL" value="AL" />
                        <Picker.Item label="AP" value="AP" />
                        <Picker.Item label="AM" value="AM" />
                        <Picker.Item label="BA" value="BA" />
                        <Picker.Item label="CE" value="CE" />                        
                        <Picker.Item label="ES" value="ES" />
                        <Picker.Item label="GO" value="GO" />
                        <Picker.Item label="MA" value="MA" />
                        <Picker.Item label="MT" value="MT" />
                        <Picker.Item label="MS" value="MS" />
                        <Picker.Item label="MG" value="MG" />
                        <Picker.Item label="PA" value="PA" />
                        <Picker.Item label="PB" value="PB" />
                        <Picker.Item label="PR" value="PR" />
                        <Picker.Item label="PE" value="PE" />
                        <Picker.Item label="PI" value="PI" />
                        <Picker.Item label="RJ" value="RJ" />
                        <Picker.Item label="RN" value="RN" />
                        <Picker.Item label="RS" value="RS" />
                        <Picker.Item label="RO" value="RO" />
                        <Picker.Item label="RR" value="RR" />
                        <Picker.Item label="SC" value="SC" />
                        <Picker.Item label="SP" value="SP" />
                        <Picker.Item label="SE" value="SE" />
                        <Picker.Item label="TO" value="TO" />
                        <Picker.Item label="DF" value="DF" />

                    </Picker>                    

                    <View>
                        <Text style={css.errorMessage}>{errorSelectedValueUF}</Text>
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

                    <Text style={css.namesInput}>Categoria</Text>
                    <Picker
                        selectedValue={selectedValueCat}
                        style={css.pickerSelect}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedValueCat(itemValue)
                            setErrorSelectedValueCat(null)
                        }}>                        
                        {
                            categorias.map( (el) => {
                                return <Picker.Item label={el.label} value={el.value}/>                                
                            })
                        }                        
                    </Picker>

                    <View>
                        <Text style={css.errorMessage}>{errorSelectedValueCat}</Text>
                    </View>


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


    pickerSelect: {
        height: 30, 
        width: 180,
        marginLeft: 10,
        
    },

    pickerSelectUF: {
        height: 30, 
        width: 90,
        marginLeft: 10,
        
    },

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
        fontSize: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 5,
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