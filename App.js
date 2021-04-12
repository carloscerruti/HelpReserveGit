import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground
      source = {require('./Imagens/back.jpg')}
      style = {styles.img}
    >
      
      <Text style={styles.title}>HelpReserve</Text>
      <Text>PUC Campinas</Text>
      <StatusBar style="auto" />

    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%'
  },

  title:{
    fontSize:35,
    justifyContent: 'center'
  }
});
