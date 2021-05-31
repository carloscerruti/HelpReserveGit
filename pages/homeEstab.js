import * as React from 'react';
import { Text,View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeEstab({navigation}) {
    
    const logout = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "LoginEstab" }]
        })
    }

    const gerenciarMesas = () => {
        navigation.navigate("gerenciarMesas")
    }

    const gerenciarReservas = () => {
        navigation.navigate("gerenciarReservas") 
    }

    const infoEstab = () => {
        navigation.navigate("infoEstab") 
    }

    return(
        <View style = {css.container}>
           {/*<View style = {css.logo_img}>
                <Image source={require('../assets/helpreserve.png')} />
             </View>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={css.background}
            />*/}
            
            <TouchableOpacity style={css.button}
            onPress={() => gerenciarReservas()}>
            <Text style={css.button_text}>Gerenciar reservas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.button}
            onPress={() => gerenciarMesas()}>
            <Text style={css.button_text}>Gerenciar mesas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.button}
            onPress={() => infoEstab()}>
            <Text style={css.button_text}>Alterar informações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.exit_button}
            onPress={() => logout(navigation)}>
            <Text style={css.button_text}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const css = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 600,
    },

    logo_img: {
        resizeMode: 'cover',
        justifyContent: 'center',
        marginBottom: 5,
      },

    button_text: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center',
        textAlign: 'justify',
      },


    button: {
        padding: 8,
        width: '80%' ,
        height: 50,
        marginTop: 35,
        marginBottom: 15,
        backgroundColor: '#750606',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },

    exit_button: {
        padding: 8,
        width: '50%' ,
        height: 45,
        marginTop: 60,
        marginBottom: 15,
        backgroundColor: '#e8692a',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },

});