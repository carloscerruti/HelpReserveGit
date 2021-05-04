import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const logout = (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{ name: "Login" }]
  })

}

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
      <TouchableOpacity style={css.login_button}
        onPress={() => logout(navigation)}>
        <Text style={css.button_text}>Sair</Text>
      </TouchableOpacity>
    </View>
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

  button_text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'justify',
  },

});