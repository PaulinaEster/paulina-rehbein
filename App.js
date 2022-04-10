// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage';
import { Button } from 'react-native-web';

const Stack = createNativeStackNavigator();

const Botao = ({ navigation }) => {
  return <View>
    <Button title=">"  onPress={ () => navigation.navigate() }
      color="#3E6B4A"
    />
  </View>
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} 
          options={{ title:"HomePage",
          headerRight: () => {
            return <Botao/>
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
