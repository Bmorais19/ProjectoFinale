import { Button, View, TextInput, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [pUser, setpUser] = useState('');
  const [pText, setpText] = useState('');
  const [pPassword, setpPassword] = useState('');
  const [ShowPass, setShowPass] = useState(false);

  const testelog = () => {
    auth()
    .signInWithEmailAndPassword(pText, pPassword)
    .then(userCredentials => {
    const user = userCredentials.user;
    console.log("User: ", user.email, "entrou.");
    if(pText == "admin1@teste.com")
    {
      navigation.replace("Turnos"); 
    }
    else
    {
      navigation.replace("UserNormal"); 
    }
    })
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
          secureTextEntry={!ShowPass}
          onChangeText={text => setpPassword(text)}
        />

        <Text></Text>

        <View style={styles.row}>

        

        <Button
        title={ShowPass ? "Hide password" : "Show password"}
        onPress={() => setShowPass(!ShowPass)}
        />
        
        <Text></Text>

        <Button
        title="Login"
        onPress={testelog}
        />

      </View>

      </View>
    );

};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    borderRadius: 110,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  textinput: {
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
  }
});

export default LoginScreen;