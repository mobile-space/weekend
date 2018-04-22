import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const CATEGORIES = {
    'food': [
        { id: 1, label: 'hotpot', category_id: '52af0bd33cf9994f4e043bdd' },
        { id: 2, label: 'sushi', category_id: '4bf58dd8d48988d1d2941735' },
        { id: 3, label: 'pancakes', category_id: '4bf58dd8d48988d143941735' },
        { id: 4, label: 'burger', category_id: '4bf58dd8d48988d16c941735' },
        { id: 5, label: 'pizza', category_id: '4bf58dd8d48988d1ca941735' }
    ],
    'beach': [
        { id: 1, label: 'nudist', category_id: '52e81612bcbc57f1066b7a30' },
        { id: 2, label: 'surf', category_id: '4bf58dd8d48988d1e3941735' }
    ],
    'theatre': [
        { id: 1, label: 'drive-in', category_id: '56aa371be4b08b9a8d5734de' },
        { id: 2, label: 'indie', category_id: '4bf58dd8d48988d17e941735' },
        { id: 3, label: 'multiplex', category_id: '4bf58dd8d48988d180941735' }
    ],
    'museum': [
        { id: 1, label: 'art', category_id: '4bf58dd8d48988d18f941735' },
        { id: 2, label: 'erotic', category_id: '559acbe0498e472f1a53fa23' },
        { id: 3, label: 'history', category_id: '4bf58dd8d48988d190941735' },
        { id: 4, label: 'Planetarium', category_id: '4bf58dd8d48988d192941735' },
        { id: 5, label: 'science', category_id: '4bf58dd8d48988d191941735' }
    ]
}

const PLANNER_KEYS = [
    "breakfast",
    "morning_attraction",
    "lunch",
    "evening_attraction",
    "dinner"
]

const PLANNER = {
    "breakfast": [
        { "id": 1, "label": "bakery", "category_id": "4bf58dd8d48988d16a941735" },
        { "id": 2, "label": "bagel", "category_id": "4bf58dd8d48988d179941735" },
        { "id": 3, "label": "cafe", "category_id": "4bf58dd8d48988d16d941735" },
        { "id": 4, "label": "Coffee", "category_id": "4bf58dd8d48988d1e0931735" },
        { "id": 5, "label": "Donut", "category_id": "4bf58dd8d48988d148941735" },
        { "id": 6, "label": "Tea room", "category_id": "4bf58dd8d48988d1dc931735" }
    ],
    "morning_attraction": [
        { "id": 1, "label": "aquarium", "category_id": "4fceea171983d5d06c3e9823" },
        { "id": 2, "label": "art gallery", "category_id": "4bf58dd8d48988d1e2931735" },
        { "id": 3, "label": "Go kart", "category_id": "52e81612bcbc57f1066b79ea" },
        { "id": 4, "label": "Historic site", "category_id": "4deefb944765f83613cdba6e" },
        { "id": 5, "label": "Movie theater", "category_id": "4bf58dd8d48988d17f941735" },
        { "id": 6, "label": "Museum", "category_id": "4bf58dd8d48988d181941735" },
        { "id": 7, "label": "Public art", "category_id": "507c8c4091d498d9fc8c67a9" },
        { "id": 8, "label": "Racecourse", "category_id": "56aa371be4b08b9a8d573514" },
        { "id": 9, "label": "Stadium", "category_id": "4bf58dd8d48988d184941735" },
        { "id": 10, "label": "Theme park", "category_id": "4bf58dd8d48988d182941735" },
        { "id": 11, "label": "Zoo", "category_id": "4bf58dd8d48988d17b941735" },
        { "id": 12, "label": "Event", "category_id": "4d4b7105d754a06373d81259" },
        { "id": 13, "label": "Beach", "category_id": "4bf58dd8d48988d1e2941735" },
        { "id": 14, "label": "Bike trail", "category_id": "56aa371be4b08b9a8d57355e" }
    ],
    "lunch": [
        { "id": 1, "label": "Afghan", "category_id": "503288ae91d4c4b30a586d67" },
        { "id": 2, "label": "American", "category_id": "4bf58dd8d48988d14e941735" },
        { "id": 3, "label": "Asian", "category_id": "4bf58dd8d48988d142941735" },
        { "id": 4, "label": "BBQ", "category_id": "4bf58dd8d48988d1df931735" },
        { "id": 5, "label": "Buffet", "category_id": "52e81612bcbc57f1066b79f4" }
    ],
    "evening_attraction": [
        { "id": 1, "label": "aquarium", "category_id": "4fceea171983d5d06c3e9823" },
        { "id": 2, "label": "art gallery", "category_id": "4bf58dd8d48988d1e2931735" },
        { "id": 3, "label": "Go kart", "category_id": "52e81612bcbc57f1066b79ea" },
        { "id": 4, "label": "Historic site", "category_id": "4deefb944765f83613cdba6e" },
        { "id": 5, "label": "Movie theater", "category_id": "4bf58dd8d48988d17f941735" },
        { "id": 6, "label": "Museum", "category_id": "4bf58dd8d48988d181941735" },
        { "id": 7, "label": "Public art", "category_id": "507c8c4091d498d9fc8c67a9" },
        { "id": 8, "label": "Racecourse", "category_id": "56aa371be4b08b9a8d573514" },
        { "id": 9, "label": "Stadium", "category_id": "4bf58dd8d48988d184941735" },
        { "id": 10, "label": "Theme park", "category_id": "4bf58dd8d48988d182941735" },
        { "id": 11, "label": "Zoo", "category_id": "4bf58dd8d48988d17b941735" },
        { "id": 12, "label": "Event", "category_id": "4d4b7105d754a06373d81259" },
        { "id": 13, "label": "Beach", "category_id": "4bf58dd8d48988d1e2941735" },
        { "id": 14, "label": "Bike trail", "category_id": "56aa371be4b08b9a8d57355e" }
    ],
    "dinner": [
        { "id": 1, "label": "Afghan", "category_id": "503288ae91d4c4b30a586d67" },
        { "id": 2, "label": "American", "category_id": "4bf58dd8d48988d14e941735" },
        { "id": 3, "label": "Asian", "category_id": "4bf58dd8d48988d142941735" },
        { "id": 4, "label": "BBQ", "category_id": "4bf58dd8d48988d1df931735" },
        { "id": 5, "label": "Buffet", "category_id": "52e81612bcbc57f1066b79f4" }
    ],
    "food": [
        { "id": 1, "label": "hotpot", "category_id": "52af0bd33cf9994f4e043bdd" },
        { "id": 2, "label": "sushi", "category_id": "4bf58dd8d48988d1d2941735" },
        { "id": 3, "label": "pancakes", "category_id": "4bf58dd8d48988d143941735" },
        { "id": 4, "label": "burger", "category_id": "4bf58dd8d48988d16c941735" },
        { "id": 5, "label": "pizza", "category_id": "4bf58dd8d48988d1ca941735" }
    ],
    "beach": [
        { "id": 1, "label": "nudist", "category_id": "52e81612bcbc57f1066b7a30" },
        { "id": 2, "label": "surf", "category_id": "4bf58dd8d48988d1e3941735" }
    ],
    "theatre": [
        { "id": 1, "label": "drive-in", "category_id": "56aa371be4b08b9a8d5734de" },
        { "id": 2, "label": "indie", "category_id": "4bf58dd8d48988d17e941735" },
        { "id": 3, "label": "multiplex", "category_id": "4bf58dd8d48988d180941735" }
    ],
    "museum": [
        { "id": 1, "label": "art", "category_id": "4bf58dd8d48988d18f941735" },
        { "id": 2, "label": "erotic", "category_id": "559acbe0498e472f1a53fa23" },
        { "id": 3, "label": "history", "category_id": "4bf58dd8d48988d190941735" },
        { "id": 4, "label": "Planetarium", "category_id": "4bf58dd8d48988d192941735" },
        { "id": 5, "label": "science", "category_id": "4bf58dd8d48988d191941735" }
    ]
}



export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            screen: 'null',
            userName: this.props.navigation.state.params && this.props.navigation.state.params.userName,
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    {/* Plan your Day */}

                    <Text style={styles.nameText}>
                        Hi {this.state.userName}
                    </Text>
                    <Text style={styles.placeText}>
                        Welcome to San Francisco
                </Text>
                    <Text style={styles.greetingText}>
                        Lets start planning your weekend!
                </Text>

                    <View style={styles.planningButton}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Option', { categories: PLANNER, current_index: 0, planner_keys: PLANNER_KEYS })}
                            title="Start"
                            titleStyle={{ fontWeight: "700" }}
                            containerViewStyle={{ marginTop: 300, alignItems: 'center' }}
                            linearGradientProps={{
                                colors: ['#80d0c7', '#80d0c7'],
                            }}
                            buttonStyle={{
                                width: 150,
                                height: 46,
                                borderRadius: 23
                            }}
                        />
                    </View>

                    {/* Specific Plans */}

                    <Text style={styles.greetingText}>
                        Have something specific in mind?
                </Text>

                    {/* <View style={styles.planningButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('OptionDetail')}
                        title="Start Planning"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: 320,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                </View> */}

                    <View style={styles.smallRow}>
                        <TouchableOpacity
                            style={styles.thumbnailImageContainer}
                            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "theatre" })}>
                            <Image
                                style={styles.thumbnailImage}
                                source={require('../../images/theatre.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.thumbnailImageContainer}
                            onPress={() => this.props.navigation.navigate('Option', { category: CATEGORIES["food"] })}>
                            <Image
                                style={styles.thumbnailImage}
                                source={require('../../images/food.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.thumbnailImageContainer}
                            onPress={() => this.props.navigation.navigate('Option', { category: CATEGORIES["beach"] })}>
                            <Image
                                style={styles.thumbnailImage}
                                source={require('../../images/beach.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.thumbnailImageContainer}
                            onPress={() => this.props.navigation.navigate('Option', { category: CATEGORIES["museum"] })}>
                            <Image
                                style={styles.thumbnailImage}
                                source={require('../../images/museum.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    placeText: {
        fontSize: 20,
        textAlignVertical: "center",
        textAlign: "left",
        marginLeft: 30,
        color: 'grey',
    },

    nameText: {
        fontSize: 40,
        fontWeight: '700',
        textAlignVertical: "center",
        textAlign: "left",
        marginLeft: 30,
        marginTop: 30
    },
    greetingText: {

        fontSize: 25,
        textAlignVertical: "center",
        textAlign: "left",
        marginLeft: 30,
        marginTop: 30
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    smallRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },

    thumbnailImageContainer: {
        padding: 13
    },

    thumbnailImage: {
        height: 145,
        width: 145,
    },

    planningButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
})