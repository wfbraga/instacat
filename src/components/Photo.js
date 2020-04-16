import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const Photo = ({ file }) => {
const [countLike, setLike] = useState(0);

  var increment = () => {
    setLike(
      countLike + 1
    ) 
  }
  return (
     <View style={styles.container}>      
      <Image style={styles.image} source={file} />
      <TouchableOpacity onPress={increment}>
        <Text style={styles.text}>{countLike} LIKE</Text>
      </TouchableOpacity>      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#CDDDDD',
    borderWidth: 2,
    marginVertical: 10,
    paddingVertical:10,
    shadowColor: '#000000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3
  },
  text: {
   fontSize: 22,
   color: '#000000',
   marginVertical: 10,  
  },
  image:{
    height: 250,
    width: 250,
  }

});

export default Photo;