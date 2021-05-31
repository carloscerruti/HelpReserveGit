import * as React from 'react';
import { Text,View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default function gerenciarMesas({navigation}) {
    
    const logout = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "LoginEstab" }]
        })
    }

    return(
        <View style = {css.container}>
           
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