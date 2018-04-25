import { StackNavigator } from 'react-navigation';

import ProcessStack from './processStack';

import LoginScreen from '../screens/LoginScreen';
import CardScreen from '../screens/CardScreen';
import ItineraryScreen from '../screens/ItineraryScreen';

export default StackNavigator({
    Intro: {
        screen: LoginScreen
    },
    Process: {
        screen: ProcessStack
    },
    Card: {
        screen: CardScreen
    },
    Itinerary: {
        screen: ItineraryScreen
    }
}, {
    initialRouteName: 'Process',
    mode: 'modal',
    headerMode: 'none'
});