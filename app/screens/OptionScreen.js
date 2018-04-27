import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard, SafeAreaView } from 'react-native';
import { LinearGradient, Font } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Header, Button, Input } from 'react-native-elements';

import { TagSelect } from 'react-native-tag-select';
import { ScrollView } from 'react-native-gesture-handler';

export default class OptionScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: { backgroundColor: 'white', borderBottomWidth: 0, borderBottomColor: '#FEE282', elevation: null },
        headerTintColor: '#1E5B7C',
        headerTitleStyle: { color: 'white', fontSize: 32 },
    };

    constructor(props) {
        super(props);

        // console.log('here')

        // console.log(this.props.navigation.state.params)

        this.state = {
            categories: this.props.navigation.state.params && this.props.navigation.state.params.categories, 
            category_key: this.props.navigation.state.params && this.props.navigation.state.params.category_key,
            planner_keys: this.props.navigation.state.params && this.props.navigation.state.params.planner_keys,
            current_index: this.props.navigation.state.params && this.props.navigation.state.params.current_index,
            latitude: '',
            longitude: '',
            fontLoaded: false
        };
    }

    async componentDidMount() {
        var url = 'https://freegeoip.net/json/';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                this.setState({
                    latitude: responseJson.latitude,
                    longitude: responseJson.longitude
                });
            })
            .catch((error) => {
                //console.error(error);
            });

        await Font.loadAsync({
            'segoe': require('../../assets/segoeuisl.ttf'),
            'futura': require('../../assets/Futura.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    getCatergoryData() {
        const { categories, category_key, planner_keys, current_index } = this.state

        if (category_key) {
            return categories[category_key]
        } else {
            const planner_key = planner_keys[current_index]

            return categories[planner_key]
        }
    }

    renderNextButton() {
        const { category_key, current_index, categories, planner_keys } = this.state

        if (category_key) {
            return null
        } else if (current_index < planner_keys.length - 1) {
            return (
                <Button
                    onPress={() => this.props.navigation.navigate('Option', { categories: categories, current_index: current_index + 1, planner_keys: planner_keys })}
                    title="Next"
                    titleStyle={{ fontWeight: "700" }}
                    containerViewStyle={{ marginTop: 300, alignItems: 'center' }}
                    // linearGradientProps={{
                    //     colors: ['#80d0c7', '#80d0c7'],
                    // }}
                    buttonStyle={{
                        backgroundColor: '#1ABC9C',
                        width: 150,
                        height: 40.5,
                        borderRadius: 5
                    }}
                />
            )
        }
    }

    renderDoneButton() {
        const { category_key, current_index, categories, planner_keys } = this.state

        if (category_key) {
            return (
                <Button
                    onPress={() => this.props.navigation.navigate('Itinerary')}
                    title="Done"
                    titleStyle={{ fontWeight: "700" }}
                    containerViewStyle={{ marginTop: 300, alignItems: 'center' }}
                    // linearGradientProps={{
                    //     colors: ['#80d0c7', '#80d0c7'],
                    // }}
                    buttonStyle={{
                        backgroundColor: '#1ABC9C',
                        width: 150,
                        height: 40.5,
                        borderRadius: 5
                    }}
                />
            )
        } else if (current_index >= planner_keys.length - 1) {
            return (
                <Button
                    onPress={() => this.props.navigation.navigate('Itinerary')}
                    title="Done"
                    titleStyle={{ fontWeight: "700" }}
                    containerViewStyle={{ marginTop: 300, alignItems: 'center' }}
                    // linearGradientProps={{
                    //     colors: ['#80d0c7', '#80d0c7'],
                    // }}
                    buttonStyle={{
                        backgroundColor: '#1ABC9C',
                        width: 150,
                        height: 40.5,
                        borderRadius: 5
                    }}
                />
            )
        }
    }

    render() {
        const { categories, category_key, planner_keys, current_index } = this.state

        const data = this.getCatergoryData()

        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        {
                            this.state.fontLoaded ? (
                                <Text style={styles.titleText}>
                                    {category_key ? category_key : planner_keys[current_index]}
                                </Text>
                            ) : null
                        }
                    </View>
                    <View style={styles.buttonRow}>
                        {
                            this.state.fontLoaded ? (
                                <TagSelect
                                    data={data}
                                    itemStyle={styles.item}
                                    itemLabelStyle={styles.label}
                                    itemStyleSelected={styles.itemSelected}
                                    itemLabelStyleSelected={styles.labelSelected}
                                    ref={(tag) => {
                                        this.tag = tag;
                                    }}
                                />
                            ) : null
                        }
                        
                    </View>
                    <View style={styles.planningContainer}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Card', { category_id: this.tag.itemsSelected, latitude: this.state.latitude, longitude: this.state.longitude })}
                            title="Explore"
                            titleStyle={{ fontWeight: "700" }}
                            containerViewStyle={{ marginTop: 300, alignItems: 'center' }}
                            // linearGradientProps={{
                            //     colors: ['#80d0c7', '#80d0c7'],
                            // }}
                            buttonStyle={{
                                backgroundColor:'#1ABC9C',
                                width: 150,
                                height: 40.5,
                                borderRadius: 5
                            }}
                        />
                        {this.renderNextButton()}
                        {this.renderDoneButton()}
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    buttonRow: {
        padding: 20,
    },
    titleText: {
        fontFamily: 'segoe',
        color: '#307983',
        fontSize: 50,
        fontWeight: '700'
    },
    textContainer: {
        justifyContent: 'flex-start',
        padding: 20,
    },
    planningContainer: {
        flexDirection:'row',
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    item: {
        height: 45,
        backgroundColor: 'transparent',
        borderWidth: 1.2,
        borderColor: '#307983',
        borderRadius: 10,
        flexWrap: 'wrap',
        paddingLeft: 22,
        paddingRight: 22,
    },
    label: {
        fontFamily: 'segoe',
        color: '#307983',
        fontSize: 15,
    },
    itemSelected: {
        backgroundColor: '#307983',
        borderColor: 'transparent'
    },

})