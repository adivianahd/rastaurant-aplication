import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../utilities/Button';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingHorizontal: 5
  },

  buttonStyle: {
    marginBottom: 10,
    borderRadius: 5,
  },
})

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, margin: 10 }}>Registro</Text>
      <TextInput style={styles.input} placeholder="Nombre"/>
      <TextInput style={styles.input} placeholder="Correo"/>
      <TextInput style={styles.input} placeholder="Contraseña"/>
      <Button title={'Enviar'} style={styles.buttonStyle} />
      <Button title={'Volver al inicio'} style={styles.buttonStyle}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}