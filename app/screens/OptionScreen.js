import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Header, Button, Input } from 'react-native-elements';


const categoryArray = []

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
                buttonStyle={selected ? { backgroundColor: 'blue', borderRadius: 100, width: 100,  } : { borderWidth: 1, borderColor: 'blue', borderRadius: 100, width: 100, backgroundColor: 'transparent', marginHorizontal: 5, marginVertical: 5 }}
                containerViewStyle={{ marginRight: -7 }}
                // onPress={() => this.props.navigation.navigate('Card', { category_id: option.category_id })}
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
            selected: false,
            options: this.props.navigation.state.params && this.props.navigation.state.params.category,
            holder: ''
        };
    }

    async getData() {
        try {
            let response = await fetch('https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d17f941735&client_id=B4VPN5TQAXJ23ML1JLVQLGG0RBBKUJCZGQ4B2M32BKG3VC31&client_secret=TCIY0NOQASHESDN4QW3UAIAUSLOP2XOLYRU1EPYL4BTAB2ZY&v=20180412', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
            });
            let responseJSON = null
            if (response.status === 200) {
                responseJSON = await response.json();
                // console.log(responseJSON)
                this.setState({
                    posts: responseJSON.response.venues,
                })
            } else {
                responseJSON = await response.json();
                const error = responseJSON.message
                // console.log(responseJSON)
            }
        } catch (error) {
            this.setState({ response: error })
        }
    }

    addItemsToArray=()=>{
        categoryArray.push(this.state.holder.toString())

    }

    renderButtons() {
        const _data = this.state.options
        console.log(_data)
        return _data.map((option, index) => { 
            return <Button 
                title={option.name} 
                key={index}
                onPress={() => this.props.navigation.navigate('Card', { category_id : option.category_id})}
             />
        })
    }



    render() {
        // const food = this.selectedFood();

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    What would you like to have for breakfast?
                </Text>
                <View style={styles.buttonRow}>
                    {this.state.options && this.renderButtons()}
                </View>

                <View style={styles.planningButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Card')}
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
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    titleText: {
        fontSize: 25,
        textAlignVertical: "center",
        textAlign: "left",
        marginLeft: 30,
        marginTop: 10
    }
})