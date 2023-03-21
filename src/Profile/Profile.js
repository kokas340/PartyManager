import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground ,ActivityIndicator} from 'react-native';
import { Button } from '@ant-design/react-native';
import {styles} from './Styles';
import { auth } from '../../firebaseConfig/firebase'







export default function Profile({navigation}) {
  const signOutUser=() =>{
    auth.signOut().then(()=>{
        navigation.replace('Login');
    })
  }
      return(
        <View style={styles.container}>
          <Text>Profile screen</Text>
          <TouchableOpacity onPress={signOutUser} >
          <Text>Sign out</Text>
                    </TouchableOpacity>
        </View>
      );  
}


