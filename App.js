import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const imgbg ='C:/HelpReserve/Imagens/bgtela.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source = {require(imgbg)}
        style = {styles.imagemfundo}
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

  title:{
    fontSize:35
  },

  imagemfundo:{
    flex: 1,
    resizeMode: "cover"
  }


});
