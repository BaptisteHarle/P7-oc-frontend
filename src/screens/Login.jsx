import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Text, StyleSheet,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import Input from '../components/TextInput';

const LoginPage = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onPress() {
    setLoading(true);
    const connect = await axios.post('http://localhost:3000/login', {
      email,
      password,
    });
    const response = connect.data;

    if (response.code === 200) {
      navigation.navigate('Wall');
    } else {
      console.log(response.message);
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>
          Groupomania
        </Text>
        <View style={styles.form}>
          <Input label="Email" onChange={(e) => setEmail(e)} />
          <Input label="Mot de passe" onChange={(p) => setPassword(p)} />
        </View>
        <Button label="Connexion" onPress={onPress} loading={loading} />
        <Button backgroundColor="black" labelColor="white" label="Inscription" onPress={() => navigation.navigate('Signup')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
    alignItems: 'center',

  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FFD075',
  },
});

export default withNavigation(LoginPage);
