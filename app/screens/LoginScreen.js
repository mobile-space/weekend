import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';

import { logInUser } from '../actions';

import OnBoard from '../components/onBoard'
import Onboarding from 'react-native-onboarding-swiper';
import SF from '../../assets/sf.gif'
import NYC from '../../assets/nyc.gif'
import SEA from '../../assets/sea.gif'
import LOGO from '../../assets/logo.png'


export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            screen: 'null',
        };
    }

    // fbLogIn = async () => {
    //     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('376209866188920', {
    //         permissions: ['public_profile'],
    //     });
    //     if (type === 'success') {
    //         const response = await fetch(
    //             `https://graph.facebook.com/me?access_token=${token}`
    //         );
    //         const userInfo = await response.json();
    //         Keyboard.dismiss();
    //         const { navigate } = this.props.navigation;
    //         navigate('WelcomeDetail');
    //     }
    // }

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
            this.props.navigation.navigate('WelcomeDetail', { userName: user_name });
        }
    }

    render() {
        return (
            <Onboarding
                onSkip={() =>  this.props.navigation.navigate('WelcomeDetail')}
                onDone={() =>  this.props.navigation.navigate('WelcomeDetail')}
                pages={[

                    {
                        title: 'ALL THE FUN, WITHOUT THE HASSLE',
                        backgroundColor: 'white',
                        image: <Image source={SF} style={styles.logo} />,
                        subtitle: 'SF CITY',

                    }
                    ,
                    {
                        title: 'PICK A CITY OR PLACE',
                        backgroundColor: 'white',
                        image: <Image source={NYC} style={styles.logo} />,
                        subtitle: 'NYC CITY',
                    },

                    {
                        title: 'RECEIVE YOUR ITINERARY & ENJOY',
                        backgroundColor: 'white',
                        image: <Image source={SEA} style={styles.logo} />,
                        subtitle: 'SEATTLE',
                    },
                    {
                        title: "Layovr",
                        subtitle: (
                            <Button
                                buttonStyle={styles.button}
                                onPress={this.logIn}
                                backgroundColor="#4267B2"

                                title="Login with Facebook"
                            />
                        ),
                        backgroundColor: 'white',
                        image: (
                            <Image source={LOGO} style={styles.logo} />
                        ),
                    },
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    introContainer: {
        marginTop: 40,
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
    },
})