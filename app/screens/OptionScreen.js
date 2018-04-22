import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Header, Button, Input } from 'react-native-elements';

import { TagSelect } from 'react-native-tag-select';

export default class OptionScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: { backgroundColor: 'white', borderBottomWidth: 0, borderBottomColor: '#FEE282', elevation: null },
        headerTintColor: '#1E5B7C',
        headerTitleStyle: { color: 'white', fontSize: 32 },
    };

    constructor(props) {
        super(props);

        console.log('here')

        console.log(this.props.navigation.state.params)

        this.state = {
            categories: this.props.navigation.state.params && this.props.navigation.state.params.categories, 
            category_key: this.props.navigation.state.params && this.props.navigation.state.params.category_key,
            planner_keys: this.props.navigation.state.params && this.props.navigation.state.params.planner_keys,
            current_index: this.props.navigation.state.params && this.props.navigation.state.params.current_index,
        };
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
                        backgroundColor: 'green',
                        width: 100,
                        height: 46,
                        borderRadius: 23
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
                        backgroundColor: 'orange',
                        width: 100,
                        height: 46,
                        borderRadius: 23
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
                        backgroundColor: 'orange',
                        width: 100,
                        height: 46,
                        borderRadius: 23
                    }}
                />
            )
        }
    }

    render() {
        const { categories, category_key, planner_keys, current_index } = this.state

        const data = this.getCatergoryData()

        console.log(data)
        console.log('Display this data above')

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>
                            {category_key ? category_key : planner_keys[current_index]}
                    </Text>
                    </View>
                    <View style={styles.buttonRow}>
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
                    </View>
                    <View style={styles.planningContainer}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Card', { category_id: this.tag.itemsSelected })}
                            title="Select"
                            titleStyle={{ fontWeight: "700" }}
                            containerViewStyle={{ marginTop: 300, alignItems: 'center' }}
                            // linearGradientProps={{
                            //     colors: ['#80d0c7', '#80d0c7'],
                            // }}
                            buttonStyle={{
                                backgroundColor:'blue',
                                width: 100,
                                height: 46,
                                borderRadius: 23
                            }}
                        />
                        {this.renderNextButton()}
                        {this.renderDoneButton()}
                    </View>
                </View>
            </SafeAreaView>
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
        fontWeight: '700',
        fontSize: 32,
    },
    textContainer: {
        alignItems: 'center',
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
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 46,
        borderRadius: 23,
        flexWrap: 'wrap'
    },
    label: {
        fontSize: 18,
        flexWrap: 'wrap'
    },
    itemSelected: {
        backgroundColor: '#80d0c7',
        borderColor: 'transparent'
    },
    labelSelected: {
        fontWeight: 'bold'
    }

})