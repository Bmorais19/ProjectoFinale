import { Button, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegisterScreen = ({ navigation }) => {

  const [pUser, setpUser] = useState('');
  const [pText, setpText] = useState('');
  const [pPassword, setpPassword] = useState('');

  const Register = () =>
  {
    auth()
    .createUserWithEmailAndPassword(pText, pPassword)
    .then(() => {
      console.log('Conta Criada');
      firestore()
      .collection('testeid')
      .doc(pText)
      .set({
        username: pUser,
        email: pText,
      })
      .then(() => {
        console.log('Acho q deu');       
      });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert("Email já existe");
      }
      if (error.code === 'auth/invalid-email') {
        alert("Email Invalido");
      }
    });
  }
  
  return (
    <View>
    <TextInput
      value={pUser}
      placeholder="Username"
      onChangeText={text => setpUser(text)}
    />

    <TextInput
      value={pText}
      placeholder="Email"
      onChangeText={text => setpText(text)}
    />

    <TextInput
      value={pPassword}
      placeholder="Password"
      onChangeText={text => setpPassword(text)}
    />

    <Button
      title="Registar Conta"
      onPress={Register}
    />

    <Button
      title="Iniciar Sessão"
      onPress={() => navigation.replace('Login')}
    />

    <Button
      title="Voltar ao Menu"
      onPress={() => navigation.replace('Home')}
    />
    </View>
  );
};

export default RegisterScreen;