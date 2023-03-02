import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import {styles} from './Styles';
import { auth } from '../../firebaseConfig/firebase'

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

    const handleSignUp = () =>{
        auth.createUserWithEmailAndPassword(email,password)
            .then(authUser=>{
                authUser.user.updateProfile({
                    displayName:name,
                    photoURL:imageUrl || 'https://picsum.photos/200/300.webp'
                })
            })
            .catch((error)=>alert(error.message));
    }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>

      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Register
