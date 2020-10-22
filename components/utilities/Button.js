import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  }
})

export default ({...props}) => {
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
          <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
} 