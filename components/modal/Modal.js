import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useFetch from '../hooks/useFetch';
import Button from '../utilities/Button';

export default ({ navigation }) => {
  const id = navigation.getParam('id')
  const { loading, data } = useFetch(`http://foodapp.arepasoftware.com/meals/${id}`)

  return (
    <>
      {loading ? 
        <View style={styles.container}>
          <Text style={{fontSize: 20}}>Cargando...</Text>
        </View> 
        :
        <View style={styles.container}>
          <View style={styles.Textcontainer}>
            <Text style={{fontSize: 30}}>{data.title}</Text>
            <Text style={{fontSize: 18}}>{data.author}</Text>
            <Text style={{fontSize: 20}}>{data.description}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button title={'Aceptar'} 
              onPress={() => {
              fetch('http://foodapp.arepasoftware.com/orders', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  meal_id: id,
                  user_id: 'pueba'
                })
              }).then(() => {
                alert('orden generada con exito! :)')
                navigation.navigate('Meals')
              })
            }}/>
            <Button title={'cancelar'} 
              onPress={() => navigation.navigate('Meals')} />
          </View>
        </View>}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Textcontainer: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flex: 0.10,
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
