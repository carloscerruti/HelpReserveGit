import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppLoading } from 'expo';

import New from './components/New';
import House from './components/Estab';
import Recommended from './components/Recommended';

const logout = (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{ name: "Login" }]
  })
}

function Feed({ navigation }) {

 
  return (
    <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >
    
    <View style={css.header}>
      <View style={css.inputArea}>
        <Feather name="search" size={24} color="black" />
        <TextInput
        placeholder="O que está procurando?"
        style={css.input}
        />
      </View>
    </View>

    <View style={css.contentNew}>
      <Text style={css.title}>Estabelecimentos novos</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
      <New
       cover={require('../assets/applebees.jpg')} 
       name="Applebees"
       description="Restaurante bala"
       onPress={() => navigation.navigate('Detail')
    } 
      />

      <New
       cover={require('../assets/jangada.jpg')} 
       name="Jangada"
       description="Restaurante bala2."
       onPress={() => {}}
      />

      <New
       cover={require('../assets/outback.jpg')} 
       name="Outback"
       description="Restaurante bala3."
       onPress={() => {}}
      />

    </ScrollView>

    <View style={css.contentNew}>
      <Text style={css.title}>Estabelecimentos mais próximos</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
      <House
      name= "Botiquim"
      description="Bar e restaurante com música ao vivo"
      price="R$ 40,00"
      cover={require('../assets/botiquim.jpg')}
      />
      <House
      name= "Amazonas Sucos"
      description="Sucos deliciosos"
      price="Preços variados de R$5,00 á R$8,00"
      cover={require('../assets/amazonas.jpeg')}
      />
      <House
      name= "Beirut Beer"
      description="Bar Árabe com narguile"
      price="R$ 15,00 narguile"
      cover={require('../assets/beirut.png')}
      />
    </ScrollView>

    <View style={css.contentNew}>
      <Text style={css.title}>Estabelecimentos mais procurados</Text>
    </View>

  
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15 }}>
      <Recommended
        cover={require('../assets/madero.jpg')}
        house="Madero"
        offer="25%"
      />
      <Recommended
        cover={require('../assets/cocobambu.jpg')}
        house="Coco Bambu"
        offer="15%"
      />
      <Recommended
        cover={require('../assets/abbraccio.jpg')}
        house="Abbraccio"
        offer="10%"
      />
    </ScrollView>

    </ScrollView>
  );
}


function Profile({ navigation }) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <Text>Profile!</Text>
        <TouchableOpacity style={css.login_button}
        onPress={() => logout(navigation)}>
        <Text style={css.button_text}>Sair</Text>
      </TouchableOpacity>
      
    </View>
  );
}

function Notifications({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
      <TouchableOpacity style={css.login_button}
        onPress={() => logout(navigation)}>
        <Text style={css.button_text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeUser({ navigation }) {



  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const css = StyleSheet.create({
  logo_img: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 50,
  },

  button_text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'justify',
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

  input:{
    fontFamily: 'Arial',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },

  header:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20, 
   },

   inputArea:{
     paddingHorizontal: 15,
     flexDirection: 'row',
     alignItems: 'center',
     width: '98%',
     backgroundColor:  '#FFF',
     elevation: 2,
     paddingHorizontal: 10,
     height: 37,
     borderRadius: 10,
     borderColor: 'black',
     borderWidth: 1,
   },

   contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingTop: 10,
    paddingHorizontal: 15,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4f4a4a'
  },

});