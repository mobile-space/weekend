import React from 'react';
import { TouchableHighlight, StyleSheet, StatusBar, Text, ScrollView, Platform, View, Image, SafeAreaView, TouchableOpacity, Alert, Keyboard } from 'react-native';
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
        var featured_photo_suffix;
        var featured_photo_prefix;
        var rating;
        var stats;
        var name;
        var price;

        try {
            price = item.venue.price.message;
        } catch (e) {
        }
        try {
            featured_photo_prefix = item.venue.featuredPhotos.items[0].prefix;
        } catch (e) {
        }
        try {
            featured_photo_suffix = item.venue.featuredPhotos.items[0].suffix;
        } catch (e) {
        }
        try {
            rating = item.venue.rating;
        } catch (e) {
        } 
        try {
            stats = item.venue.stats.usersCount;
        } catch (e) {
        } 
        try {
            name = item.venue.name;
        } catch (e) {
        }
        // const price = item.venue.price.tier;


        // if(item.venue.price.tier!='null') {
        //     const price = item.venue.price.tier;
        // } 

        // if (typeof (item.venue.price.tier) == 'undefined') {
        //     console.log("Error bitch!");
        // } else {
        //     const stats = item.venue.stats.usersCount;
        // }

        return (
            <View style={styles.slide} key={item.venue.id}>
                <View style={styles.slide1}>
                    <Image
                        style={styles.imageRow}
                        source={{ uri: `${featured_photo_prefix}500x500${featured_photo_suffix}` || '' }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{name}</Text>
                        <TouchableHighlight
                            style={styles.ratingContainer}

                            underlayColor='#fff'>
                            <Text style={styles.ratingText}>{item.venue.rating}</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.peopleText}>{stats} people have visited</Text>
                        <Text style={styles.peopleText}>{price} </Text>

                    </View>

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
        flex: 1,
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
        backgroundColor: '#fefefe',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imageRow: {
        height: itemWidth,
        width: itemWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
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
    textContainer: {
        justifyContent: 'flex-start',
        marginTop: 10,
        // backgroundColor: 'black',     
        height: 90,
        flex: 1,
        flexDirection: 'row',
        width: itemWidth
    },
    titleText: {
        color: 'black',
        fontSize: 30,
        textAlign: 'left',
        marginLeft: 20,
        width: 190,
        flex: 2,
        // backgroundColor: 'orange',
    },
    peopleText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 20,
        width: 190,
        flex: 2,
        // backgroundColor: 'orange',
    },
    ratingContainer: {


        flex: 1,
        width: 70,
        marginRight: 10,
        height: 70,
        borderRadius: 500,
        backgroundColor: '#1D5B98',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width,
        flex: 1
    },
    ratingText: {
        color: '#fefefe',
        fontSize: 45,
        fontWeight: 'bold',
    },
    stretch: {
        height: 300,
        width: 300,
    }
})