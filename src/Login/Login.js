import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@ant-design/react-native';
import {styles} from './Styles';
import { auth } from '../../firebaseConfig/firebase'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        //check if user is logged in
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                //send to home if logged in
                //navigation.replace("screen");
            }
        })
        return unsubscribe;
    },[])
  
    const handleLogin = () => {
        //firebase login
        auth.signInWithEmailAndPassword(email,password).catch(error=> alert(error));
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


