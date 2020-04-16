import React from 'react';
import { Text, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Text style={style.logo}> INstaCat </Text>
  )
}
const style= StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginVertical: 20,
  }
});

export default Logo;