import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Header, Button, Input } from 'react-native-elements';
import {FOOD} from '../components/foodOption'

export default class OptionScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: { backgroundColor: 'orange', borderBottomWidth: 0, borderBottomColor: '#FEE282', elevation: null },
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white', fontSize: 32 },
    };
    constructor(props) {
        super(props);
        this.state = {
            screen: 'null',
            posts: []
        };
    }

    async getData() {
        try {
            let response = await fetch('https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d17f941735&client_id=B4VPN5TQAXJ23ML1JLVQLGG0RBBKUJCZGQ4B2M32BKG3VC31&client_secret=TCIY0NOQASHESDN4QW3UAIAUSLOP2XOLYRU1EPYL4BTAB2ZY&v=20180412', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
            });
            let responseJSON = null
            if (response.status === 200) {
                responseJSON = await response.json();
                // console.log(responseJSON)
                this.setState({
                    posts: responseJSON.response.venues,
                })
            } else {
                responseJSON = await response.json();
                const error = responseJSON.message
                // console.log(responseJSON)
            }
        } catch (error) {
            this.setState({ response: error })
        }
    }

    render() {
        // const food = this.selectedFood();
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    What would you like to eat?
                </Text>
                <Button
                    // onPress={this.onChooseFood.bind(this)}
                    title="Arab"
                    titleStyle={{ fontWeight: "700" }}
                    color="blue"
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 0)",
                        width: 100,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                    containerStyle={{ marginTop: 20 }}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Card')}
                    title="Go"
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        width: 100,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                    containerStyle={{ marginTop: 20 }}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30,
        textAlignVertical: "center",
        textAlign: "center",
    }
})