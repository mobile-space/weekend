import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Icon, Header, Card, ListItem, Button } from 'react-native-elements';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';


export default class ItineraryScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            screen: 'null',
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>

                    <View style={styles.topContainer}>
                        <Text style={styles.titleText}>
                            Itinerary
                        </Text>
                        <Header
                            placement="left"
                            leftComponent={
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.goBack() }}>
                                    <EvilIcons name="close" size={40} color="black" />
                                </TouchableOpacity>
                            }
                            outerContainerStyles={{ backgroundColor: 'transparent', borderBottomWidth: 0, marginTop: -7, }}
                        />
                    </View>
                    <ScrollView>
                        <View style={styles.mapContainer}>
                        </View>

                        <Card
                            title='Breakfast'>
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                        </Card>
                        <Card
                            title='Morning Attractions'>
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                           
                        </Card>
                        <Card
                            title='Lunch'>
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                          
                        </Card>
                        <Card
                            title='Afternoon Attractions'>
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                        
                        </Card>
                        <Card
                            title='Dinner'>
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                            
                        </Card>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    titleText: {
        fontWeight: '700',
        fontSize: 50,
        // backgroundColor: 'black',   
        flex: 2,
    },
    topContainer: {
        justifyContent: 'flex-start',
        padding: 20,

        flexDirection: 'row',
        // backgroundColor: 'black',
    },
    mapContainer: {
        backgroundColor: 'black',
        flexDirection: 'row',
        width: '100%',
        height: 300,
    }
})