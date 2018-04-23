/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
FlatList Component with Images
Swipe to delete item in FlatList
*/
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            activeRowKey: null
        };          
    }
    render() {   
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
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
                              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'Yes', onPress: () => {        
                                flatListData.splice(this.props.index, 1); 
                                //Refresh FlatList ! 
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                              }},
                            ],
                            { cancelable: true }
                          ); 
                    }, 
                    text: 'Delete', type: 'delete' 
                }
            ],  
            rowId: this.props.index, 
            sectionId: 1    
        };               
        return (  
            <Swipeout {...swipeSettings}>
                <View style={{
                flex: 1,
                flexDirection:'column',  
                backgroundColor: 'white',                              
                }}>            
                    <View style={{
                            flex: 1,
                            flexDirection:'row',
                            marginBottom: 5,
                            // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                            backgroundColor: '#E3E3E3',
                            borderTopLeftRadius: 50,
                            borderBottomLeftRadius: 50,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10
                    }}>            
                        <Image 
                            source={{uri: this.props.item.imageUrl}}
                            style={{width: 100, height: 100, margin: 5, borderRadius: 50}}
                        >
                        </Image>
                        <View style={{
                                flex: 1,
                                flexDirection:'column',   
                                height: 100                 
                            }}>            
                                <Text style={styles.flatListText}>{this.props.item.name}</Text>
                                <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>              
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor:'white'                            
                    }}>
                
                    </View>
                </View>   
            </Swipeout>      
            
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
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
        <View style={{flex: 1}}>
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
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