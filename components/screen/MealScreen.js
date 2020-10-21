import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Button from '../utilities/Button'

const Meals = ({ navigation }) => {
  const [ loading, setLoading ] = useState(true);
  const [ meals, setMeals ] = useState([]);

  const fetchMeals = async () => {
  const response = await fetch('http://198.168.0.24:3004/meals')
    const data = await response?.json() || [];
    setMeals(data)
    setLoading(false)
  }


  useEffect(()=> {
    fetchMeals().catch(e => {
      console.log('rompio', e)
    });
  }, [])
  
  console.log('esto muestra el consolelog', meals)

  return( 
  <View style={styles.container}>
    {loading ? <Text>Cargando...</Text> :
    <FlatList
      style={styles.list}
      data={meals}
      keyExtractor={x => x.id}
      renderItem={({item}) => 
        <Button 
          style={styles.mealsList} 
          data={item.title} 
          onPress={()=> navigation.navigate('Modal', {_id: item._id})}/>
      }
    /> }
  </View>
  )
}

Meals.navigationOptions = ({
  title: 'comidas disponibles',
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    alignSelf: 'stretch',
  },

  mealsList: {
    flex: 1,
    paddingHorizontal: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
})

export default Meals;