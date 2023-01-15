import { Button, View, TextInput } from 'react-native';
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

        <Button
        title={ShowPass ? "Hide password" : "Show password"}
        onPress={() => setShowPass(!ShowPass)}
        
        />
        
        <Button
        title="Login"
        onPress={testelog}
        />

        <Button
        title="Voltar"
        onPress={() => navigation.replace('Home')}
        />
      </View>
    );

};

export default LoginScreen;