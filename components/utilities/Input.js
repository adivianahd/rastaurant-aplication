import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingHorizontal: 5
  }
})

export default ({...props}) => {
    return (
        <TextInput 
        style={[styles.input , props.style]}
        placeholder={props.placeholder}/>
    )
} 