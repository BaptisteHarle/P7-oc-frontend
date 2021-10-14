import React from 'react';
import {
  TouchableOpacity, StyleSheet, Text, ActivityIndicator,
} from 'react-native';

const Button = ({
  label, onPress, backgroundColor, labelColor, loading,
}) => (
  <TouchableOpacity style={[styles.btn, { backgroundColor: backgroundColor || '#FFD075' }]} onPress={onPress}>
    { loading
      ? <ActivityIndicator size="small" color="white" />
      : <Text style={[styles.btnText, { color: labelColor || 'black' }]}>{label}</Text> }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    width: 278,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 10,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Button;
