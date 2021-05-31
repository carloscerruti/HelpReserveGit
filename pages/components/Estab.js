import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function House({ cover, name, description, price }) {
 return (
   <View style={styles.container}>
     <View>
       <Image
       source={cover}
       style={styles.cover}
       />
     </View>

    <View style={styles.content}>

       <Text style={styles.name}>
         {name}
       </Text>

       <Text style={styles.description}>
         {description}
      </Text>
       <Text style={styles.price}>
         {price}
      </Text>
    </View> 

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: 260,
    height: 70,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 6,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 2,
    borderRadius: 10,
  },
  cover:{
    borderRadius: 10,
    width: 60,
    height: 60
  },
  content:{
    width: '65%',
    justifyContent:'flex-end',
    paddingHorizontal: 10,
    height: '100%'
  },
  description:{
    fontSize: 9,
    fontFamily: 'Arial'
  },
  price:{
    fontSize: 12,
    fontFamily: 'Arial'
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginBottom: 5,
    color: '#4f4a4a',
  },
});