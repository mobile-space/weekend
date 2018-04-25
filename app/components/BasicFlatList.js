/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
FlatList Component with Images
Swipe to delete item in FlatList
*/
import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import { Icon, Header, Card, ListItem } from 'react-native-elements';
import openMap from 'react-native-open-maps';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }

    _goToLocation() {
        openMap({ latitude: 37.865101, longitude: -119.538330 });
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Remove',
                            'Do you want to delete this from your itineary?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh FlatList ! 
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            left: [
                {
                    onPress: () => {
                        openMap({ latitude: 37.865101, longitude: -119.538330 });
                    },
                    text: 'Navigate', type: 'primary'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    backgroundColor: 'white',
                    // borderTopLeftRadius: 50,
                    // borderBottomLeftRadius: 50,
                    // borderTopRightRadius: 10,
                    // borderBottomRightRadius: 10
                }}>
                <Card
                    image={{uri : this.props.item.imageUrl}}
                    imageStyle={{height: 220}}
                    containerStyle={{width: 320}}>
                    <View style={styles.cardContainer}>
                    <Text style={{ marginBottom: 10 }}>
                        {this.props.item.name}</Text>
                    <Text style={{ marginBottom: 10 }}>
                        {this.props.item.foodDescription}</Text>
                        </View>
                </Card>
                </View>
            </Swipeout>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    cardContainer:{
        flex:1,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    flatListItem: {
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        fontSize: 15,
    },
    flatListText: {
        color: 'black',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
    }
    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems:'center', justifyContent:'center', padding: 5 }}>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>);
                    }}
                >
                </FlatList>
            </View>
        );
    }
}