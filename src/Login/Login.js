import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@ant-design/react-native';
import {styles} from './Styles';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
    };
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Button style={styles.button} onPress={handleLogin}>Login</Button>
        </View>
      );
}


