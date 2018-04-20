import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';

const CATEGORIES = {
    'food': [
        { name: 'hotpot', category_id: '52af0bd33cf9994f4e043bdd'},
        { name: 'sushi', category_id: '4bf58dd8d48988d1d2941735'},
        { name: 'pancakes', category_id: '4bf58dd8d48988d143941735'},
        { name: 'burger', category_id: '4bf58dd8d48988d16c941735'},
        { name: 'pizza', category_id: '4bf58dd8d48988d1ca941735'}
    ],
    'beach' : [
        { name: 'nudist', category_id: '52e81612bcbc57f1066b7a30'},
        { name: 'surf', category_id: '4bf58dd8d48988d1e3941735'}
    ],
    'theatre': [
        { name: 'drive-in', category_id: '56aa371be4b08b9a8d5734de'},
        { name: 'indie', category_id: '4bf58dd8d48988d17e941735'},
        { name: 'multiplex', category_id: '4bf58dd8d48988d180941735'}
    ],
    'museum': [
        { name: 'art', category_id: '4bf58dd8d48988d18f941735'},
        { name: 'erotic', category_id: '559acbe0498e472f1a53fa23' },
        { name: 'history', category_id: '4bf58dd8d48988d190941735'},
        { name: 'Planetarium', category_id: '4bf58dd8d48988d192941735'},
        { name: 'science', category_id: '4bf58dd8d48988d191941735'}
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
        };
    }
    render() {
        return (
            <View style={styles.container}>

                {/* Plan your Day */}

                <Text style={styles.nameText}>
                    Hi Girish
                </Text>
                <Text style={styles.placeText}>
                    Welcome to San Francisco
                </Text>
                <Text style={styles.greetingText}>
                    Lets start planning your weekend!
                </Text>

                <View style={styles.planningButton}>
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
                        onPress={() => this.props.navigation.navigate('OptionDetail', {category: CATEGORIES["theatre"] })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/theatre.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('OptionDetail', { category: CATEGORIES["food"] })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/food.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.smallRow2}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('OptionDetail', { category: CATEGORIES["beach"] })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/beach.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('OptionDetail', { category: CATEGORIES["museum"] })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/museum.png')}
                        />
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.buttonContainer}>
                    <Button
                        title="Movies"
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
                        title="Beach"
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
                        title="Food"
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
                        title="Pizza"
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
                        onPress={() => this.props.navigation.navigate('OptionDetail')}
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
                </View> */}
            </View>
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
    },

    nameText: {
        fontSize: 40,
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
        width: '100%',
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 12
    },

    smallRow2: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: -5
    },

    thumbnailImage: {
        height: 145,
        width: 145,
        marginRight: 10
    },

    planningButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
})