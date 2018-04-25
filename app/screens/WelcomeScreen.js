import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard, SafeAreaView } from 'react-native';
import { LinearGradient, Font } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { Constants, Location, Permissions } from 'expo';

const CATEGORIES = {
    'Food': [
        { id: 1, label: 'hotpot', category_id: '52af0bd33cf9994f4e043bdd' },
        { id: 2, label: 'sushi', category_id: '4bf58dd8d48988d1d2941735' },
        { id: 3, label: 'pancakes', category_id: '4bf58dd8d48988d143941735' },
        { id: 4, label: 'burger', category_id: '4bf58dd8d48988d16c941735' },
        { id: 5, label: 'pizza', category_id: '4bf58dd8d48988d1ca941735' }
    ],
    'Beach': [
        { id: 1, label: 'nudist', category_id: '52e81612bcbc57f1066b7a30' },
        { id: 2, label: 'surf', category_id: '4bf58dd8d48988d1e3941735' }
    ],
    'Theatre': [
        { id: 1, label: 'drive-in', category_id: '56aa371be4b08b9a8d5734de' },
        { id: 2, label: 'indie', category_id: '4bf58dd8d48988d17e941735' },
        { id: 3, label: 'multiplex', category_id: '4bf58dd8d48988d180941735' }
    ],
    'Museum': [
        { id: 1, label: 'art', category_id: '4bf58dd8d48988d18f941735' },
        { id: 2, label: 'erotic', category_id: '559acbe0498e472f1a53fa23' },
        { id: 3, label: 'history', category_id: '4bf58dd8d48988d190941735' },
        { id: 4, label: 'Planetarium', category_id: '4bf58dd8d48988d192941735' },
        { id: 5, label: 'science', category_id: '4bf58dd8d48988d191941735' }
    ],
    'Arts': [
        { id: 1, label: 'Dance studio', category_id: '4bf58dd8d48988d134941735' },
        { id: 2, label: 'Indie Theater', category_id: '4bf58dd8d48988d135941735' },
        { id: 3, label: 'Opera House', category_id: '4bf58dd8d48988d136941735' },
        { id: 4, label: 'Theater', category_id: '4bf58dd8d48988d137941735' },
        { id: 5, label: 'Public Art', category_id: '507c8c4091d498d9fc8c67a9' }
    ],
    'Bar': [
        { id: 1, label: 'Beach Bar', category_id: '52e81612bcbc57f1066b7a0d' },
        { id: 2, label: 'Beer Bar', category_id: '56aa371ce4b08b9a8d57356c' },
        { id: 3, label: 'Cocktail Bar', category_id: '4bf58dd8d48988d11e941735' },
        { id: 4, label: 'Dive Bar', category_id: '4bf58dd8d48988d118941735' },
        { id: 5, label: 'Gay Bar', category_id: '4bf58dd8d48988d1d8941735' },
        { id: 6, label: 'Hookah Bar', category_id: '4bf58dd8d48988d119941735' },
        { id: 7, label: 'Hotel Bar', category_id: '4bf58dd8d48988d1d5941735' },
        { id: 8, label: 'Karaoke Bar', category_id: '4bf58dd8d48988d120941735' },
        { id: 9, label: 'Pub', category_id: '4bf58dd8d48988d11b941735' },
        { id: 10, label: 'Sports Bar', category_id: '4bf58dd8d48988d11d941735' },
        { id: 11, label: 'Whisky Bar', category_id: '4bf58dd8d48988d122941735' },
        { id: 12, label: 'Wine Bar', category_id: '4bf58dd8d48988d123941735' },
    ],
    'Clothing': [
        { id: 1, label: 'Accessories Store', category_id: '4bf58dd8d48988d102951735' },
        { id: 2, label: 'Boutique', category_id: '4bf58dd8d48988d104951735' },
        { id: 3, label: 'Kids Store', category_id: '4bf58dd8d48988d105951735' },
        { id: 4, label: 'Lingerie Store', category_id: '4bf58dd8d48988d109951735' },
        { id: 5, label: 'Mens Store', category_id: '4bf58dd8d48988d106951735' },
        { id: 6, label: 'Shoe Store', category_id: '4bf58dd8d48988d107951735' },
        { id: 7, label: 'Womens Store', category_id: '4bf58dd8d48988d108951735' },
    ],
    'Coffee': [
        { id: 1, label: 'Coffee', category_id: '4bf58dd8d48988d1e0931735' },
        { id: 2, label: 'Turkish', category_id: '56aa371be4b08b9a8d5734c1' },
        { id: 3, label: 'Corporate', category_id: '5665c7b9498e7d8a4f2c0f06' },
    ],
    'Events': [
        { id: 1, label: 'Christmas Market', category_id: '52f2ab2ebcbc57f1066b8b3b' },
        { id: 2, label: 'Conference', category_id: '5267e4d9e4b0ec79466e48c6' },
        { id: 3, label: 'Convention', category_id: '5267e4d9e4b0ec79466e48c9' },
        { id: 4, label: 'Festival', category_id: '5267e4d9e4b0ec79466e48c7' },
        { id: 5, label: 'Line / Queue', category_id: '58daa1558bbb0b01f18ec1fa' },
        { id: 6, label: 'Music Festival', category_id: '5267e4d9e4b0ec79466e48d1' },
        { id: 7, label: 'Parade', category_id: '52741d85e4b0d5d1e3c6a6d9' },
        { id: 8, label: 'Stoop Sale', category_id: '52f2ab2ebcbc57f1066b8b54' },
        { id: 9, label: 'Street Fair', category_id: '5267e4d8e4b0ec79466e48c5' },
    ],
    'Hotel': [
        { id: 1, label: 'Bed & Breakfast', category_id: '4bf58dd8d48988d1f8931735' },
        { id: 2, label: 'Boarding House', category_id: '4f4530a74b9074f6e4fb0100' },
        { id: 3, label: 'Hostel', category_id: '4bf58dd8d48988d1ee931735' },
        { id: 4, label: 'Hotel Pool', category_id: '4bf58dd8d48988d132951735' },
        { id: 5, label: 'Motel', category_id: '4bf58dd8d48988d1fb931735' },
        { id: 6, label: 'Resort', category_id: '4bf58dd8d48988d12f951735' },
        { id: 7, label: 'Roof Deck', category_id: '4bf58dd8d48988d133951735' },
        { id: 8, label: 'Vacation Rental', category_id: '56aa371be4b08b9a8d5734e1' },
    ],
    'Spiritual': [
        { id: 1, label: 'Buddhist Temple', category_id: '52e81612bcbc57f1066b7a3e' },
        { id: 2, label: 'Church', category_id: '4bf58dd8d48988d132941735' },
        { id: 3, label: 'Hindu Temple', category_id: '52e81612bcbc57f1066b7a3f' },
        { id: 4, label: 'Monastery', category_id: '52e81612bcbc57f1066b7a40' },
        { id: 5, label: 'Mosque', category_id: '4bf58dd8d48988d138941735' },
        { id: 6, label: 'Prayer Room', category_id: '52e81612bcbc57f1066b7a41' },
        { id: 7, label: 'Shrine', category_id: '4eb1d80a4b900d56c88a45ff' },
        { id: 8, label: 'Temple', category_id: '4bf58dd8d48988d13a941735' },
    ],
    'Sports': [
        { id: 1, label: 'Badminton', category_id: '52e81612bcbc57f1066b7a2b' },
        { id: 2, label: 'Baseball', category_id: '4bf58dd8d48988d1e8941735' },
        { id: 3, label: 'Basketball', category_id: '4bf58dd8d48988d1e1941735' },
        { id: 4, label: 'Bowling', category_id: '52e81612bcbc57f1066b7a2f' },
        { id: 5, label: 'Golf Course', category_id: '4bf58dd8d48988d1e6941735' },
        { id: 6, label: 'Gym / Fitness Center', category_id: '4bf58dd8d48988d175941735' },
        { id: 7, label: 'Hockey', category_id: '56aa371be4b08b9a8d57352c' },
        { id: 8, label: 'Paintball', category_id: '5032829591d4c4b30a586d5e' },
        { id: 9, label: 'Rugby', category_id: '52e81612bcbc57f1066b7a2c' },
        { id: 10, label: 'Skate', category_id: '4bf58dd8d48988d167941735' },
        { id: 11, label: 'Soccer', category_id: '4cce455aebf7b749d5e191f5' },
        { id: 12, label: 'Squash', category_id: '52e81612bcbc57f1066b7a2d' },
        { id: 13, label: 'Tennis', category_id: '4e39a956bd410d7aed40cbc3' },
        { id: 14, label: 'Volleyball', category_id: '4eb1bf013b7b6f98df247e07' },
    ],
}

const PLANNER_KEYS = [
    "Breakfast",
    "Morning Attractions",
    "Lunch",
    "Evening Attractions",
    "Dinner"
]

const PLANNER = {
    "Breakfast": [
        { "id": 1, "label": "bakery", "category_id": "4bf58dd8d48988d16a941735" },
        { "id": 2, "label": "bagel", "category_id": "4bf58dd8d48988d179941735" },
        { "id": 3, "label": "cafe", "category_id": "4bf58dd8d48988d16d941735" },
        { "id": 4, "label": "Coffee", "category_id": "4bf58dd8d48988d1e0931735" },
        { "id": 5, "label": "Donut", "category_id": "4bf58dd8d48988d148941735" },
        { "id": 6, "label": "Tea room", "category_id": "4bf58dd8d48988d1dc931735" }
    ],
    "Morning Attractions": [
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
    "Lunch": [
        { "id": 1, "label": "Afghan", "category_id": "503288ae91d4c4b30a586d67" },
        { "id": 2, "label": "American", "category_id": "4bf58dd8d48988d14e941735" },
        { "id": 3, "label": "Asian", "category_id": "4bf58dd8d48988d142941735" },
        { "id": 4, "label": "BBQ", "category_id": "4bf58dd8d48988d1df931735" },
        { "id": 5, "label": "Buffet", "category_id": "52e81612bcbc57f1066b79f4" }
    ],
    "Evening Attractions": [
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
    "Dinner": [
        { "id": 1, "label": "Afghan", "category_id": "503288ae91d4c4b30a586d67" },
        { "id": 2, "label": "American", "category_id": "4bf58dd8d48988d14e941735" },
        { "id": 3, "label": "Asian", "category_id": "4bf58dd8d48988d142941735" },
        { "id": 4, "label": "BBQ", "category_id": "4bf58dd8d48988d1df931735" },
        { "id": 5, "label": "Buffet", "category_id": "52e81612bcbc57f1066b79f4" }
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
            cityName: '',
            fontLoaded: false,
        };
    }

    async componentDidMount() {
        var url = 'https://freegeoip.net/json/';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                this.setState({
                    cityName: responseJson.city,
                });
            })
            .catch((error) => {
                //console.error(error);
            });

        await Font.loadAsync({
            'segoe': require('../../assets/segoeuisl.ttf'),
            'futura': require('../../assets/Futura.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {/* Plan your Day */}
                <View style={styles.plannerContainer}>
                    {
                        this.state.fontLoaded ? (
                            <Text style={styles.nameText}>
                                Hi {this.state.userName}
                            </Text>
                        ) : null
                    }
                    {
                        this.state.fontLoaded ? (
                            <Text style={styles.placeText}>
                                Explore {this.state.cityName}.
                        </Text>
                        ) : null
                    }
                    <View style={styles.planningButton}>
                        {
                            this.state.fontLoaded ? (
                                <Button
                                    onPress={() => this.props.navigation.navigate('Option', { categories: PLANNER, current_index: 0, planner_keys: PLANNER_KEYS })}
                                    title="Start Planning"
                                    titleStyle={{ fontFamily: 'segoe' }}
                                    containerViewStyle={{ alignItems: 'center', justifyContent: 'center' }}
                                    buttonStyle={{
                                        borderWidth: 3,
                                        borderColor: 'rgba(255, 255, 255, 0.5);',
                                        backgroundColor: 'transparent',
                                        width: 180,
                                        height: 50,
                                        borderRadius: 25
                                    }}
                                />
                            ) : null
                        }

                    </View>
                </View>

                {/* Specific Plans */}
                {
                    this.state.fontLoaded ? (
                        <Text style={styles.greetingText}>
                            Popular
                        </Text>
                    ) : null
                }
                

                <View style={styles.smallRow}>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Theatre" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/theatre.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Food" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/food.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Beach" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/beach.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Museum" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/museum.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Arts" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/arts.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Bar" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/bar.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Clothing" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/clothing.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Coffee" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/coffee.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Events" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/events.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Hotel" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/hotel.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Spiritual" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/spiritual.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.thumbnailImageContainer}
                        onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Sports" })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/sports.png')}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    plannerContainer: {
        height: 600,
        justifyContent: 'center',
        backgroundColor: '#307983'
    },
    placeText: {
        fontFamily: 'futura',
        fontSize: 40,
        textAlignVertical: "center",
        textAlign: "left",
        marginLeft: 30,
        color: 'white',
    },

    nameText: {
        fontFamily: 'segoe',
        color: 'white',
        fontSize: 40,
        textAlignVertical: "center",
        textAlign: "left",
        marginLeft: 30,
        marginTop: 30
    },
    greetingText: {
        fontFamily: 'segoe',
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
        marginTop: 50,
        marginLeft: 30
    }
})