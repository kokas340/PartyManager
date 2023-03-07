import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './CardStyle';

export default function Card() {
    return (
        <TouchableOpacity style={styles.card}>
            <Image
                style={styles.bannerCard}
                source={require('../../../assets/party.jpg')}
            /> 
            <View style={styles.infoCard}>
                <View style={styles.creatorCard}>
                    <View style={styles.authorView}>
                        <Image
                            style={styles.profileImage}
                            source={require('../../../assets/profile.jpg')}
                        />
                        <Text style={styles.authorName}>Jack Miranda</Text>
                    </View>
                    <View style={styles.membersView}>
                        <Image
                            style={styles.profileImage}
                            source={require('../../../assets/profile.jpg')}
                        />
                         <Image
                            style={styles.profileImage}
                            source={require('../../../assets/profile.jpg')}
                        />
                         <Image
                            style={styles.profileImage}
                            source={require('../../../assets/profile.jpg')}
                        />
                        <Text style={styles.authorName}>+5</Text>
                    </View>

                </View>
                <View>
                    <Text style={styles.partyTitle}>VIA UK Drill Party!!</Text>
                </View>
                <View  style={styles.partyLocation}>
                        <Image
                            style={styles.locationImage}
                            source={require('../../../assets/location.png')}
                        />
                    <Text style={styles.partyLocationText}>3999 Trainer Avenue, Chillicothe</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}