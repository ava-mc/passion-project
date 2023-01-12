import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from './pages/HomePage';
import Sender from './pages/Sender';
import Receiver from './pages/Receiver';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Mystery Mail" }}
        />
        <Stack.Screen
          name="Sender"
          component={Sender}
          options={{ title: "Send your card" }}
        />
        <Stack.Screen
          name="Receiver"
          component={Receiver}
          options={{ title: "Receive your card" }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}


