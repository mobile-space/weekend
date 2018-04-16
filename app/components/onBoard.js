import { StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Alert, StatusBar } from 'react-native';
import React from 'react';
// Version can be specified in package.json
import Onboarding from 'react-native-onboarding-swiper';
import SF from '../../assets/sf.gif'
import NYC from '../../assets/nyc.gif'
import SEA from '../../assets/sea.gif'
import LOGO from '../../assets/logo.png'

const OnBoard = ({ navigation }) => (
    <Onboarding
        onSkip={() => navigation.navigate('WelcomeDetail')}
        onDone={() => navigation.navigate('WelcomeDetail')}
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
                        title={'Continue'}
                        containerViewStyle={{ marginTop: 20 }}
                        backgroundColor={'#E44A4C'}
                        borderRadius={5}
                        textStyle={{ color: 'white' }}
                        onPress={() => navigation.navigate('WelcomeDetail')}

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
const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        width: 350,
        height: 350,
    },
});

export default OnBoard;