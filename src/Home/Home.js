import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './Styles';
import Card from './Components/Card'

export default function Home() {
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
