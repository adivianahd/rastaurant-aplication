import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../utilities/Button';
import Input from '../utilities/Input';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  buttonStyle: {
    marginBottom: 10,
    borderRadius: 5,
  },
})

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, margin: 10 }}>Iniciar sesion</Text>
      <Input placeholder="Nombre"/>
      <Input placeholder="Contraseña"/>
      <Button title={'Entrar'} style={styles.buttonStyle} />
      <Button title={'Registrarse'} style={styles.buttonStyle}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  )
}