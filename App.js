import RegisterScreen from './Screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login';
import TurnosScreen from './Screens/Turnos';
import UserNormal from './Screens/UserNormal';
import InfoPessoal from './Screens/Info';
import HomeScreen from './Screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Turnos" component={TurnosScreen}/>
      <Stack.Screen name="UserNormal" component={UserNormal}/>
      <Stack.Screen name="Info" component={InfoPessoal}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;