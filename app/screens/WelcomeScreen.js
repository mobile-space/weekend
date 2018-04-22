import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const CATEGORIES = {
    'food': [
        { id: 1, label: 'hotpot', category_id: '52af0bd33cf9994f4e043bdd'},
        { id: 2, label: 'sushi', category_id: '4bf58dd8d48988d1d2941735'},
        { id: 3, label: 'pancakes', category_id: '4bf58dd8d48988d143941735'},
        { id: 4, label: 'burger', category_id: '4bf58dd8d48988d16c941735'},
        { id: 5, label: 'pizza', category_id: '4bf58dd8d48988d1ca941735'}
    ],
    'beach' : [
        { id: 1, label: 'nudist', category_id: '52e81612bcbc57f1066b7a30'},
        { id: 2, label: 'surf', category_id: '4bf58dd8d48988d1e3941735'}
    ],
    'theatre': [
        { id: 1, label: 'drive-in', category_id: '56aa371be4b08b9a8d5734de'},
        { id: 2, label: 'indie', category_id: '4bf58dd8d48988d17e941735'},
        { id: 3, label: 'multiplex', category_id: '4bf58dd8d48988d180941735'}
    ],
    'museum': [
        { id: 1, label: 'art', category_id: '4bf58dd8d48988d18f941735'},
        { id: 2, label: 'erotic', category_id: '559acbe0498e472f1a53fa23' },
        { id: 3, label: 'history', category_id: '4bf58dd8d48988d190941735'},
        { id: 4, label: 'Planetarium', category_id: '4bf58dd8d48988d192941735'},
        { id: 5, label: 'science', category_id: '4bf58dd8d48988d191941735'}
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
            </ScrollView>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
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