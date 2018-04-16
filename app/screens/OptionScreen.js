import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Header, Button, Input } from 'react-native-elements';
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
                <Text style={styles.titleText}>
                    What would you like to eat?
                </Text>
                <Button
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
                    title="American"
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
                    title="Pancakes"
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