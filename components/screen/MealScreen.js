import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Button from '../utilities/Button';
import useFetch from '../hooks/useFetch';

const Meals = ({ navigation }) => {
  const { loading, data: meals } = useFetch('http://foodapp.arepasoftware.com/meals')
  
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
          title={item.title} 
          onPress={()=> navigation.navigate('Modal', { id: item.id})}/>
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