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
        console.log(this.props.navigation.state.params)
        this.state = {
            posts: [],
            category_id: this.props.navigation.state.params.category_id,
            categories: '',
            images: []
        }
    }


    mapCategories() {
        const _data = this.state.category_id
        let categoryId = ''
        console.log(_data)
        _data.map((option, index) => {
            categoryId += option.category_id + ','
        })
        this.setState({ categories: categoryId })
    }


    async getData() {
        try {
            let response = await fetch(`https://api.foursquare.com/v2/venues/explore?ll=37.787959,-122.4775569&categoryId=4bf58dd8d48988d1d0941735,&venuePhotos=1&client_id=B4VPN5TQAXJ23ML1JLVQLGG0RBBKUJCZGQ4B2M32BKG3VC31&client_secret=TCIY0NOQASHESDN4QW3UAIAUSLOP2XOLYRU1EPYL4BTAB2ZY&v=20180412`, {
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
                    posts: responseJSON.response.groups[0].items,
                })
                console.log(posts)
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
        console.log(this.state.posts)
        this.mapCategories()
    }
    _renderItem({ item, index }) {
        const featured_photo = item.venue.featuredPhotos.items[0]

        return (
            <View style={styles.slide} key={item.venue.id}>
                <View style={styles.slide1}>
                    <Image
                        style={styles.stretch}
                        source={{ uri: `${featured_photo.prefix}300x300${featured_photo.suffix}` || ''}}
                />
                    <Text style={styles.text}>{item.venue.name}</Text>
                    {/* <Text style={styles.text}>{item.id}</Text> */}
                </View>
            </View>
        );
    }
    render() {
        const { posts } = this.state;
        
        return (
            <View style={styles.container}>
                <Carousel
                    layout={'default'}
                    ref={(c) => { this._carousel = c; }}
                    data={posts}
                    renderItem={this._renderItem.bind(this)}
                    slideStyle={{ flex: 1 }}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#97CAE5',
    },
    slide: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        // other styles for the item container
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1
    },
    slide1: {
        width: itemWidth,
        height: 500,
        paddingHorizontal: horizontalMargin,
        backgroundColor: 'white',
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
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width,
        flex: 1
    },
    stretch: {
        height: 300,
        width: 300,
    }
})