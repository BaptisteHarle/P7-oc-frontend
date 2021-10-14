import React from 'react';
import {
  View, TextInput, StyleSheet, Text,
} from 'react-native';

const Input = ({
  label, onChange, multiline, height, 
  width, placeholder, style,
}) => {

  const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 30,
      width: width || '100%',
      ...style,
    },
    input: {
      width: '100%',
      height: 50,
      borderRadius: 5,
      backgroundColor: '#F7F6F4',
      fontWeight: 'bold',
      fontSize: 12,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 8,
    },
    label: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 12,
    },
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        multiline={multiline}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        style={[styles.input, { height: height || 50 }]}
        onChangeText={(value) => (onChange ? onChange(value) : () => { })}
      />
    </View>
  );
}

export default Input;
