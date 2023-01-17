import { View, Text, Button, StyleSheet } from 'react-native';
import React, {} from 'react';


const HomeScreen = ({ navigation }) => {
    return(
    <View style={styles.row}> 

       

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={{fontWeight:'bold',fontSize:30, fontFamily: 'Inter', color: 'black', justifyContent: 'center',alignItems:'center'}}>                 Bem Vindo</Text>
        <Text style={{fontWeight:'bold',fontSize:40, fontFamily: 'Inter', color: 'black', justifyContent: 'center',alignItems:'center'}}>          Shifter App</Text>
        <Text></Text>
        <Text></Text>
        <View style>
        <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        />
        <Text></Text>
        <Button 
        title="Register"
        onPress={() => navigation.navigate('Register')}
        />
        <Text></Text>
        <Button
        title="Creditos"
        onPress={() => navigation.navigate('Info')}
        />
        <Text></Text>

        </View>

        
    </View>
    )};


    const styles = StyleSheet.create({
        row: {
          width: '100%',
          borderRadius: 110,
          paddingHorizontal: 10,
          marginVertical: 5,
        },
        roww: {
          fontWeight: 'bold',
          justifyContent: 'center',
          alignItems: 'center',
        }
    });


export default HomeScreen;