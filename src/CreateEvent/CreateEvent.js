import React, { useState } from 'react';
import { View, TextInput, Switch, Text, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './Styles';
export default function CreateEvent() {
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [guestRestrictions, setGuestRestrictions] = useState('Friends Only');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <View style={styles.container}>
         <View style={styles.header}>
              
                    <Text style={styles.heading}>Events</Text>
            
         
            </View>
      <TextInput
        style={styles.input}
        placeholder="Party Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Party Description"
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Privacy Settings:</Text>
      <Switch
        value={isPrivate}
        onValueChange={setIsPrivate}
      />
      <Text style={styles.switchText}>{isPrivate ? 'Private' : 'Public'}</Text>
      <Text style={styles.label}>Guest Restrictions:</Text>
      <Picker
        style={styles.picker}
        selectedValue={guestRestrictions}
        onValueChange={setGuestRestrictions}
      >
        <Picker.Item label="Friends Only" value="Friends Only" />
        <Picker.Item label="Friends of Friends" value="Friends of Friends" />
      </Picker>
      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="Party Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button  title="Create Event"   onPress={handleSubmit} />
    </View>
  )
}
