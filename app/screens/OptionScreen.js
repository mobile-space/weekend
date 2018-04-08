import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Header,Button, Input } from 'react-native-elements';


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
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Card')}
                        title="select"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('OptionDetail')}
                        title="next"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Itinerary')}
                        title="Done"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})