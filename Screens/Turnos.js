import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const TurnosScreen = ({navigation}) => {
  const [selectedShift, setSelectedShift] = useState(null);

  const [selectedShift2, setSelectedShift2] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);

  const [visible, setVisible] = useState(true);

  const [escolhido, setEscolhido] = useState(true);

  const handleSelectShift = (shift) => {
    setSelectedShift(shift);
    console.log("Bachira");
    setVisible(false)
  };

  const handleSelectShift2 = (shift) => {
    setSelectedShift2(shift);
    console.log("Isagi");
    setEscolhido(false)
  };

  const handleSelectUser = (shift) => {
    console.log("Barou");
    setSelectedUser(shift)
  };

  const comecar = ['8:00','9:00','10:00','11:00','12:00'];

  const acabar = ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'];

  const Enviar = () => {
    firestore()
    .collection('testeid')
    .doc(selectedUser)
    .update({
      horaInicio: selectedShift,
      horaFim: selectedShift2
    })
    .then(() => {
      alert("Turno Criado!\n Obrigado por usar a nossa App!");
      navigation.replace("Login")
    });
  };

  const [data] = React.useState([]);

  useEffect(() => {

    const collectionRef = firestore().collection('testeid');
    collectionRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.id);
    });
    });
  }, []);

  if(visible)
  {
    return (
      <View>
        <Text>Selecione a hora que quer começar:</Text>
        {comecar.map((shift) => (
          <TouchableOpacity
            key={shift}
            onPress={() => handleSelectShift(shift)}
            style={{
              backgroundColor: shift === selectedShift ? 'lightgray' : 'white',
              padding: 8,
              margin: 8,
            }}
          >
            <Text>{shift}</Text>
          </TouchableOpacity>
        ))}
        <Button
        title="Back"
        onPress={() => navigation.replace('Login')}>
        </Button>
      </View>
    );
  }
  else
  {

    if(escolhido)
    {
      return (
        <View>
          <Text>Selecione a hora que quer acabar:</Text>
          {acabar.map((shift) => (
            <TouchableOpacity
              key={shift}
              onPress={() => handleSelectShift2(shift)}
              style={{
                backgroundColor: shift === selectedShift2 ? 'lightgray' : 'white',
                padding: 8,
                margin: 8,
              }}
            >
              <Text>{shift}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    else
    {
      return (
        <View>
          {data.map((shift) => (
            <TouchableOpacity
              key={shift}
              onPress={() => handleSelectUser(shift)}
              style={{
                backgroundColor: shift === selectedUser ? 'lightgray' : 'white',
                padding: 8,
                margin: 8,
              }}
            >
              <Text>{shift}</Text>
            </TouchableOpacity>
          ))}
          <Button
          title='Enviar para o Utilizador'
          onPress={Enviar}
          />
          
        </View>
      );
    }

  }

};

export default TurnosScreen;
