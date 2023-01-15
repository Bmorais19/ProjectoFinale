import { View, Text, Button } from 'react-native';
import React, {} from 'react';


const HomeScreen = ({ navigation }) => {
    return(
    <View> 
        <Text>
            Bem-Vindo
        </Text>

        <Button
        title="Login"
        onPress={() => navigation.replace('Login')}
        />
        <Button
        title="Register"
        onPress={() => navigation.replace('Register')}
        />
        <Button
        title="Não logado"
        onPress={() => navigation.replace('Info')}
        />
    </View>
    )};

export default HomeScreen;