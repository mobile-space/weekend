import React, { Component } from 'react';
import { Animated, Text, Keyboard, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { Constants } from 'expo';
const SF = require('../../images/onboarding/sf.png')
const PARIS = require('../../images/onboarding/paris.png')
const TOKYO = require('../../images/onboarding/tokyo.png')
const LAST = require('../../images/onboarding/last.png')
import { logInUser } from '../actions';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGES = [
    {
        title: 'Stress-free planning',
        description: "Get personalised activity ideas based on place and time",
        backgroundColor: '#0264BC',
        image: SF,
    },
    {
        title: 'All your trip details in one spot',
        description: "Save all spots to a single itinerary",
        backgroundColor: '#1abc9c',
        image: TOKYO,
    },
    {
        title: 'No internet? No problem.',
        description: "Browse you itinerary even with no internet connection",
        backgroundColor: '#d35400',
        image: PARIS,
    },
    {
        title: 'You are on your way',
        description: "Get Started",
        backgroundColor: '#4A90E2',
        image: LAST,
    },
]

export default class App extends Component {
    state = {
        scroll: new Animated.Value(0),
    };

    logIn = async () => {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('376209866188920', {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`);
            const user_name = (await response.json()).name;

            Keyboard.dismiss();
            this.props.navigation.navigate('Process', { userName: user_name });
        }
    }

    render() {
        const position = Animated.divide(this.state.scroll, PAGE_WIDTH);
        const backgroundColor = position.interpolate({
            inputRange: PAGES.map((_, i) => i),
            outputRange: PAGES.map(p => p.backgroundColor),
        });
        console.log(PAGE_WIDTH)

        return (
            <View style={styles.container}>
                <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor, opacity: 0.8 }]} />

                <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.state.scroll } } }],
                    )}>

                    {PAGES.map((page, i) => (
                        <View key={i} style={styles.page}>
                            <View style={[styles.card]}>
                                <Text style={styles.title}>{page.title}</Text>
                                <Text style={styles.desc}>{page.description}</Text>
                            </View>

                            <Animated.View style={[styles.frame, { transform: [{ translateX: Animated.multiply(Animated.add(position, -i), -300) }] }]}>
                                <Animated.Image
                                    source={page.image}
                                    style={styles.photo}
                                />
                            </Animated.View>
                        </View>
                    ))}
                </Animated.ScrollView>
                <TouchableOpacity
                    onPress={this.logIn}
                >
                    <View style={styles.buttonContainer}>

                        <View style={styles.button}>
                            <Text style={styles.buttonText}>{"CONTINUE WITH FACEBOOK"}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Process')}
                    
                >
                    <View style={styles.skipButtonContainer}>

                        <View style={styles.skipButton}>
                            <Text style={styles.buttonText}>{"SKIP"}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shadow: {
        elevation: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 20,
        shadowOffset: {
            height: 12
        },
    },
    title: {
        fontSize: PAGE_WIDTH / 12,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: 'transparent',
        textAlign: 'center'
    },

    desc: {
        fontSize: PAGE_WIDTH / 24,
        color: '#fff',
        backgroundColor: 'transparent',
        marginTop: 20,
        lineHeight: 25,
        textAlign: 'center'
    },
    page: {
        width: PAGE_WIDTH,
        paddingTop: Constants.statusBarHeight + 48,
    },
    card: {
        position: 'absolute',
        margin: 12,
        marginTop: 40,
        left: 12,
        top: 0,
        right: 0,
        borderRadius: 8,
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 140,
    },
    frame: {
        top: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'rgba(0,0,0, 0.3)',

        borderRadius: 50,
        alignItems: 'center',

    },
    buttonText: {
        margin: 15,
        marginLeft: 40,
        marginRight: 40,
        color: '#fff',
        fontSize: 14,
    },
    skipButton: {
        marginLeft: 40,
        marginRight: 40,
    },
    skipButtonContainer: {
        marginTop: -10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photo: {


    },
    buttonContainer: {
        // backgroundColor: 'black',

        margin: 12,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});