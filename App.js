import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//views
import Login from './src/Login/Login';
import Register from './src/Register/Register';
import Home from './src/Home/Home'
import CreateEvent from './src/CreateEvent/CreateEvent'


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      activeColor="#A555EC"
      inactiveColor="#696969"
      barStyle={{ backgroundColor: '#FFFAF0' }}
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="Events" component={Home}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="party-popper" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Map" component={Home}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-legend" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Create" component={CreateEvent}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="MyParties" component={Home}
        options={{
          tabBarLabel: 'My parties',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Home} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="face-man" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
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
