import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Header, Button, Input } from 'react-native-elements';


export default class CardScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.navBar}>Cancel</Text>
                        </TouchableOpacity>
                    }
                />
                    <Button
                        onPress={() => this.props.navigation.navigate('Itinerary')}
                        title="Card Screen"
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
})