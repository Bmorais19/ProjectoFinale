import { Button, View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.row}>
    
    <Text style= {{fontWeight:'bold',fontSize:40, fontFamily: 'Inter', color: 'black', justifyContent: 'center',alignItems:'center'}}>              {nome}</Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text style= {{fontSize:30, fontFamily: 'Inter', color: 'black', justifyContent: 'center',alignItems:'center'}}>Hora do Inicio do Turno - {horaInicio}</Text>
    <Text style= {{fontSize:30, fontFamily: 'Inter', color: 'black', justifyContent: 'center',alignItems:'center'}}>Hora do Fim do Turno - {horaFim}</Text>
    <View style={styles.roww}>
    <Button
    title="Back"
    onPress={()=>logout()}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '99%',
    paddingTop: '50%',
  },
  roww: {
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
    borderRadius: 110,
    paddingHorizontal: 10,
    marginVertical: 20
  }
});


export default UserNormal;