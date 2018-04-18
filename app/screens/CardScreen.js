import React from 'react';
import { StyleSheet, StatusBar, Text, ScrollView, Platform, View, Image, SafeAreaView, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { Dimensions } from 'react-native';
// import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('window');
// const sliderWidth = width;
// const itemWidth = slideWidth + itemHorizontalMargin * 2;
// function wp(percentage) {
//     const value = (percentage * width) / 100;
//     return Math.round(value);
// }
// const slideHeight = height * 0.36;
// const slideWidth = wp(75);
// const itemHorizontalMargin = wp(2);
const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = width
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
export default class CardScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        console.log()
        this.state = {
            posts: [],
            category_id: this.props.navigation.state.params.category_id
        }
    }
    async getData() {
        console.log(this.state.category_id)
        try {
            let response = await fetch(`https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=${this.state.category_id}&client_id=B4VPN5TQAXJ23ML1JLVQLGG0RBBKUJCZGQ4B2M32BKG3VC31&client_secret=TCIY0NOQASHESDN4QW3UAIAUSLOP2XOLYRU1EPYL4BTAB2ZY&v=20180412`, {
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
    // dataList() {
    //     var size = 5;
    //     return this.state.posts.slice(0, size).map((item) => {
    //         return (
    //             <View style={styles.slide1} key={item.id}>
    //                 <Text style={styles.text}>{item.name}</Text>
    //                 {/* <Text style={styles.text}>{item.contact.twitter}</Text> */}
    //             </View>
    //         )
    //     })
    // }
    componentDidMount() {
        this.getData()
    }
    _renderItem({ item, index }) {
        return (
            <View style={styles.slide} key={item.id}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </View>
        );
    }
    render() {
        const { posts } = this.state;
        return (
            <Carousel
                layout={'default'}
                ref={(c) => { this._carousel = c; }}
                data={posts}
                renderItem={this._renderItem.bind(this)}
                slideStyle={{ flex: 1 }}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        // other styles for the item container
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1
    },
    slide1: {
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: horizontalMargin,
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width,
        flex: 1
    }
})