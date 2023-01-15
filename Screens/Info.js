import { View, Text, Button } from 'react-native';
import React, {} from 'react';


const InfoPessoal = ({ navigation }) => {
    return(
    <View> 
        <Text>
            Trabalho realizado por Bernardo Morais Nº45347
        </Text>

        <Button
        title="Voltar"
        onPress={() => navigation.replace('Login')}
        />
    </View>
    )};

export default InfoPessoal;