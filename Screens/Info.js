import { View, Text, Button } from 'react-native';
import React, {} from 'react';


const InfoPessoal = ({ navigation }) => {
    return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
        <Text style={{fontWeight:'bold',fontSize:30, fontFamily: 'Inter', color: 'black'}}>
        Trabalho realizado por  
        </Text>
        <Text  style={{fontWeight:'bold',fontSize:30, fontFamily: 'Inter', color: 'black'}}>Bernardo Morais</Text>
        <Text  style={{fontWeight:'bold',fontSize:30, fontFamily: 'Inter', color: 'black'}}>Nº45347</Text>
    </View>
    )};

export default InfoPessoal;