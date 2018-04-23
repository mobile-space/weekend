import React from 'react';
import { TouchableHighlight, StyleSheet, StatusBar, Text, ScrollView, Platform, View, Image, SafeAreaView, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { Dimensions } from 'react-native';
// import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo'
import { Icon, Header, Card, ListItem, Button  } from 'react-native-elements'
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';


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

let NEW_CATEGORIES_STRING = ''

export default class CardScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        console.log(this.props.navigation.state.params)

        console.log('in card got the above data in params')

        this.state = {
            posts: [],
            category_id: this.props.navigation.state.params.category_id,
            api_categories: '',
            images: []
        }
    }


    mapCategories() {
        const { category_id } = this.state
        let category_string = ''

        category_id.map((option, index) => {
            category_string += option.category_id + ','
        })

        NEW_CATEGORIES_STRING = category_string

        this.getData()
    }


    async getData() {
        console.log(NEW_CATEGORIES_STRING)

        try {
            let response = await fetch(`https://api.foursquare.com/v2/venues/explore?ll=37.787959,-122.4775569&categoryId=${NEW_CATEGORIES_STRING}&venuePhotos=1&client_id=B4VPN5TQAXJ23ML1JLVQLGG0RBBKUJCZGQ4B2M32BKG3VC31&client_secret=TCIY0NOQASHESDN4QW3UAIAUSLOP2XOLYRU1EPYL4BTAB2ZY&v=20180412`, {
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
        this.mapCategories()
    }

    _renderItem({ item, index }) {
        var featured_photo_suffix;
        var featured_photo_prefix;
        var icon_prefix;
        var icon_suffix;
        var rating;
        var stats;
        var name;
        var address;
        var price;
        var hours;

        try {
            hours = item.venue.hours.isOpen;
        } catch (e) {
        }
        try {
            address = item.venue.location.address;
        } catch (e) {
        }
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
            icon_prefix = item.venue.categories[0];
        } catch (e) {
        }
        try {
            icon_suffix = item.venue.categories[0];
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
                    <View style={styles.infoContainer}>
                        <View style={styles.textContainer}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.titleText}>{name}</Text>
                                <Text style={styles.addressText}>{address}</Text>
                            </View>
                            {/* <TouchableHighlight style={styles.iconBackground}
                                underlayColor='#fff'>
                                <Image
                                    style={{ width: 30, height: 30 }}
                                    source={{ uri: `${icon_prefix.icon.prefix}64${icon_suffix.icon.suffix}` }}
                                />
                            </TouchableHighlight> */}
                            <View style={styles.ratingContainer}>

                                <TouchableHighlight style={styles.ratingBackground}
                                    underlayColor='#fff'>
                                    <Text style={styles.ratingText}>{item.venue.rating}</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={styles.statsContainer}>
                                <EvilIcons name="clock" size={30} color="#97D9FB" />
                            </View>
                            <View style={styles.statsContainer}>
                                <MaterialIcons name="person-outline" size={30} color="#FCB5C8" />
                            </View>
                            <View style={styles.priceContainer}>
                                <Text style={styles.priceIconText}>{price === 'Cheap' ? '$' : 'Cheap' || price === 'Moderate' ? '$$' : 'Moderate' || price === 'Expensive' ? '$$$' : 'Expensive'} </Text>
                            </View>
                        </View>
                        <View style={styles.textIconContainer}>
                            <View style={styles.statsContainer}>
                                <Text style={styles.statsText}>{hours === true ? 'OPEN' : 'CLOSED'}</Text>
                            </View>
                            <View style={styles.statsContainer}>
                                <Text style={styles.statsText}>{stats}</Text>
                            </View>
                            <View style={styles.priceContainer}>
                                <Text style={styles.priceText}>PRICE</Text>
                            </View>
                        </View>
                    </View>
                    {/* <Text style={styles.text}>{item.id}</Text> */}
                </View>
            </View>
        );
    }
    render() {
        const { posts } = this.state;

        return (
            <LinearGradient
                colors={['#80d0c7', '#13547a']}
                style={styles.container}>
                <Header
                    placement="left"
                    leftComponent={

                        <TouchableOpacity
                            onPress={() => { this.props.navigation.goBack() }}>
                            <EvilIcons name="close" size={40} color="white" />
                        </TouchableOpacity>
                    }
                    outerContainerStyles={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
                />
                <Carousel
                    layout={'default'}
                    ref={(c) => { this._carousel = c; }}
                    data={posts}
                    renderItem={this._renderItem.bind(this)}
                    slideStyle={{ flex: 1 }}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: 520,
        borderRadius: 10,
        backgroundColor: '#fefefe',
        overflow: 'hidden',
    },
    imageRow: {
        overflow: 'hidden',
        backgroundColor: '#C9C9C9',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: itemWidth,
        width: itemWidth,
    },
    infoContainer: {
        padding: 15,
        flex: 1,
    },
    iconContainer: {
        // justifyContent: 'flex-start',
        // marginTop: 10,
        // backgroundColor: 'red',
        // backgroundColor: 'black',     
        // height: 90,
        paddingTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        // justifyContent: 'flex-start',
        // marginTop: 10,
        // backgroundColor: 'red',
        // backgroundColor: 'black',     
        // height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameContainer: {
        flex: 3,
        justifyContent: 'flex-start',
    },
    statsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        // justifyContent: 'flex-start',
    },
    titleText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    addressText: {
        color: 'grey',
        fontSize: 15,
    },
    statsText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'grey',
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
    priceContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        // alignItems: 'flex-end',
    },
    priceIconText: {
        fontSize: 22,
        color: '#239B1F',
        textAlign: 'center',
        fontWeight: '300'
    },
    priceText: {
        fontSize: 15,
        color: 'grey',
        textAlign: 'center',
        fontWeight: '300'
    },
    ratingContainer: {
        flex: 1,
        alignItems: 'flex-end'
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    iconBackground: {
        backgroundColor: '#1D5B98',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: -320,
        // marginRight: -240,
    },
    ratingBackground: {
        // // backgroundColor: '#1D5B98',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: 60,
        // height: 30,
        // borderRadius: 15,
    },
    image: {
        width,
        flex: 1
    },
    ratingText: {
        color: '#434343',
        fontSize: 40,
        fontWeight: '700',
    },
    stretch: {
        height: 300,
        width: 300,
    }
})