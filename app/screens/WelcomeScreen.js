import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';
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
                <Text style={styles.titleText}>
                    How would you to like to start your day?
                </Text>
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
    titleText: {
        fontSize: 30,
        textAlignVertical: "center",
        textAlign: "center",
    }
})