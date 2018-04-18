import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Header, Button, Input } from 'react-native-elements';

class CustomButton extends Component {
    constructor() {
        super();

        this.state = {
            selected: false
        };
    }

    componentDidMount() {
        const { selected } = this.props;

        this.setState({
            selected
        });
    }

    render() {
        const { title } = this.props;
        const { selected } = this.state;

        return (
            <Button
                title={title}
                textStyle={selected ? { fontSize: 15, color: 'white' } : { fontSize: 15, color: 'blue' }}
                buttonStyle={selected ? { backgroundColor: 'blue', borderRadius: 100, width: 100, } : { borderWidth: 1, borderColor: 'blue', borderRadius: 100, width: 100, backgroundColor: 'transparent' }}
                containerViewStyle={{ marginRight: -7 }}
                onPress={() => this.setState({ selected: !selected })}
            />
        );
    }
}

export default class OptionScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: { backgroundColor: 'white', borderBottomWidth: 0, borderBottomColor: '#FEE282', elevation: null },
        headerTintColor: 'blue',
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
                    What would you like to have for breakfast?
                </Text>

                <View style={styles.buttonRow}>
                    <CustomButton title="Pancakes" />
                    <CustomButton title="Ice Cream" />
                    <CustomButton title="Sushi" />
                </View>

                <View style={styles.buttonRow}>
                    <CustomButton title="Pancakes" />
                    <CustomButton title="Ice Cream" />
                </View>

                <View style={styles.planningButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('OptionDetail')}
                        title="Go to cards"
                        titleStyle={{ fontWeight: "700" }}
                        containerViewStyle={{ marginTop: 300, alignItems: 'center'}}
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
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    buttonRow: {
        width: 70,
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 12,
        height: 50
    },
    titleText: {
        fontSize: 25,
        textAlignVertical: "center",
        textAlign: "left",
        marginLeft: 30,
        marginTop: 10
    }
})