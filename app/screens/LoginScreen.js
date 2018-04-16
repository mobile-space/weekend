import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';

import LOGO from '../../assets/logo.png';
import OnBoard from '../components/onBoard'

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
    render() {
        return (
            // <View style={styles.container}>
            //     <View style={styles.introContainer}>
            //         <Image
            //             source={LOGO}
            //             style={styles.logo}

            //         />
            //                 <Text style={{
            //                     fontSize: 50,
            //                     fontWeight: '200',
            //                     color: 'black'
            //                 }}> Layovr </Text>
            //     </View>
            //         {/* <Button
            //             onPress={() => this.props.navigation.navigate('WelcomeDetail')}
            //             title="Login Screen"
            //             titleStyle={{ fontWeight: "700" }}
            //             buttonStyle={{
            //                 backgroundColor: "rgba(92, 99,216, 1)",
            //                 width: 300,
            //                 height: 45,
            //                 borderColor: "transparent",
            //                 borderWidth: 0,
            //                 borderRadius: 5
            //             }}
            //         /> */}
            //         <View style={styles.buttonContainer}>
            //     <Button
            //         onPress={() => this.props.navigation.navigate('WelcomeDetail')}
            //         title='Continue'
            //         buttonStyle={{
            //             backgroundColor: "#E44A4C",
            //             borderColor: "transparent",
            //             width: 300,
            //             height: 45,
            //             borderRadius: 20
            //         }}
            //     />
            //     </View>
            // </View>
            <OnBoard navigation={this.props.navigation} />
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
        alignItems:'center',
        justifyContent:'center',
        justifyContent: 'space-around',
    },
    button: {
        fontSize: 20,
        color: 'white',
    }
})