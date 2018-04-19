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

    fbLogIn = async () => {
        const { type } = await Expo.Facebook.logInWithReadPermissionsAsync('376209866188920', {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            Keyboard.dismiss();
            const { navigate } = this.props.navigation;
            navigate('WelcomeDetail');
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Onboarding
                onSkip={() => navigate('WelcomeDetail')}
                onDone={() => navigate('WelcomeDetail')}
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
                                onPress={this.fbLogIn}
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
    button: {
        fontSize: 20,
        color: 'white',
    }
})