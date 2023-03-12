import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground ,ActivityIndicator} from 'react-native';
import { Button } from '@ant-design/react-native';
import {styles} from './Styles';
import { auth } from '../../firebaseConfig/firebase'


export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        //check if user is logged in
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                //send to home if logged in
                navigation.navigate('MyTabs')
            }else{
              setIsLoading(false)
            }
        })
        return unsubscribe;
    },[])
  
    const handleLogin = () => {
        //firebase login
        auth.signInWithEmailAndPassword(email,password).catch(error=> alert(error));
      
    };
    const handleRegister = () => {
      navigation.navigate('Register')
      
  };
    if(!isLoading){
      return(
        <View style={styles.container}>
           <ImageBackground  source={require('../../assets/loginbg.jpg')} resizeMode="cover" style={styles.imagebg}>

         
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
          <Button style={styles.button} onPress={handleRegister}>Register</Button>
          </ImageBackground>
        </View>
      );
    }else{
      return(
        <View style={styles.container}>
           <ImageBackground  source={require('../../assets/loginbg.jpg')} resizeMode="cover" style={styles.imagebg}>
           <ActivityIndicator size="large" color="#0000ff" />
          </ImageBackground>
        </View>
      );
    }
   
      
     
}


