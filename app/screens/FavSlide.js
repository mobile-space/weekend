import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ActivityIndicator,
  Platform,
  Dimensions,
  AsyncStorage,
  DeviceEventEmitter,
  Easing,
  Animated,
} from 'react-native';
import { Icon, Header, Button } from 'react-native-elements';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Animation from 'lottie-react-native';
import LottieAnimation from 'easy-lottie-react-native';

export default class FavSlide extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      progress: new Animated.Value(0),

    };
  }

  lottieOnPressStart() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start();
  }
  
  render = () => {

    return (
      <TouchableOpacity
        style={styles.animationContainer}
        onPress={this.lottieOnPressStart.bind(this)}>
        <Animation
          style={{
            height: 50,
            width: 50,
          }}
          source={require('../../assets/heartbutton.json')}
          progress={this.state.progress}
        />
      </TouchableOpacity>
    );



  }

}

const styles = StyleSheet.create({

  animationContainer: {
    position: 'absolute',
    bottom: 210,
    right: 10,
    width: 50,
    height: 50
  },
  
});

