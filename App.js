import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login/Login';
import Register from './src/Register/Register';
import Home from './src/Home/Home'
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
       <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
