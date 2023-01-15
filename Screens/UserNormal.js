import { Button, View, Text, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



const UserNormal = ({ navigation }) => {

  const Item = auth().currentUser.email

  const logout = () => {
    auth()
    .signOut()
    .then(() => navigation.replace("Login"));
  }

  function horaFinal(documentSnapshot){return documentSnapshot.get('horaFim');}
  function horaInicial(documentSnapshot){return documentSnapshot.get('horaInicio');}
  function nomeuser(documentSnapshot){return documentSnapshot.get('username')}
  const [horaInicio, setHoraInicio] = React.useState([]);
  const [horaFim, setHoraFim] = React.useState([]);
  const [nome, setnome] = React.useState([]);
  const lerNome = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => nomeuser(documentSnapshot))
    .then(feito => {
      const nome = []
      console.log(auth().currentUser);
      nome.push(feito);
      setnome(nome);
    })
  };

  const lerFinal = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaFinal(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraFim(horinha);
    })
  };

  const lerInicial = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaInicial(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraInicio(horinha);
    })
  };

  useEffect(() => {
    lerNome()
    lerFinal()
    lerInicial()
  }, []);

  return (
    <View>
    <Text>{nome}</Text>
    <Text>Hora do Inicio - {horaInicio}</Text>
    <Text>Hora do Fim do Turno - {horaFim}</Text>
    <Button
    title="Back"
    onPress={()=>logout()}/>
    </View>
  );
};

export default UserNormal;