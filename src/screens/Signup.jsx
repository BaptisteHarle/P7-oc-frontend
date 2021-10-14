import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import Input from '../components/TextInput';

const SignupPage = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function register() {
    setLoading(true);
    const newUser = await axios.post('http://localhost:3000/signup', {
      firstName,
      lastName,
      email,
      password,
    });
    const response = newUser.data;

    if (response.code === 200) {
      console.log('compte crée');
      navigation.navigate('login');
    } else {
      console.log(response.message);
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Inscription</Text>
        <Text style={styles.subtitle}>Inscrivez-vous et rejoignez toute l'equipe de Groupomania</Text>
        <Input label="Nom" onChange={(n) => setLastName(n)} />
        <Input label="Prénom" onChange={(p) => setFirstName(p)} />
        <Input label="Email" onChange={(e) => setEmail(e)} />
        <Input label="Mot de passe" onChange={(p) => setPassword(p)} />
        <Button label="Inscription" onPress={register} loading={loading} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Retour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  routeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange',
  },
  form: {
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'uppercase',
    textAlign: 'left',
    color: '#FFD075',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 30,
  },
});

export default withNavigation(SignupPage);
