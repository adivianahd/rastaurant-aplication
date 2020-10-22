import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useFetch from '../hooks/useFetch';
import Button from '../utilities/Button';

export default ({ navigation }) => {
  const id = navigation.getParam('id')  
  const {loading, data} = useFetch(`http://foodapp.arepasoftware.com/meals/${id}`)
  
  if(loading) return (<Text>Cargando...</Text>);

    return( 
      <>
    <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.author}>{data.author}</Text>
        <Text style={styles.description}>{data.description}</Text>
   </View>
   <View style={styles.buttonContainer}>
      <Button title={'Aceptar'} onPress={()=> {
        fetch('http://foodapp.arepasoftware.com/orders',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            meal_id: id,
            user_id: 'pueba'
          })
        }).then(()=> {
          alert('orden generada con exito! :)')
          navigation.navigate('Meals')
        })
      }}/>
      <Button title={'cancelar'} onPress={()=> navigation.navigate('Meals')}/>
   </View>
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

  title: {
    fontSize: 20,
  },

  description: {
    alignSelf: 'center',
    fontSize: 18,
  },

  author: {
    alignSelf: 'center',
    fontSize: 14,
  },

  buttonContainer: {
    flex: 0.10,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
