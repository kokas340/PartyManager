import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './Styles';
import Card from './Components/Card'
import { auth, db } from '../../firebaseConfig/firebase'

export default function Home() {
    const [loading, setLoading] = useState(true); //loading
    const [events, setEvents] = useState([]);

    useEffect(() => {
        //Get all events
        const subscriber = db.collection('events').onSnapshot(querySnapshot => {
                const events = [];

                querySnapshot.forEach(documentSnapshot => {
                    events.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setEvents(events);
                setLoading(false);
            });

        console.log(events)
        return () => subscriber();
    }, []);

    const onEvents = () => {
        console.log('Button onEvents!');
    };

    const onArchived = () => {
        console.log('Button onArchived!');
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onEvents}>
                    <Text style={styles.heading}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onArchived}>
                    <Text style={styles.heading2}>Archived</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.body}>
                <View style={styles.subHeader}>
                    <Text style={styles.heading3}>Current</Text>
                    <TouchableOpacity style={styles.seeAllTouch}>
                        <Text style={styles.heading4}>See all</Text>
                    </TouchableOpacity>
                    
                </View>

                <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card></Card>
                    <Card></Card>
                  

                </ScrollView>

            </View>

        </View>
    )
}
