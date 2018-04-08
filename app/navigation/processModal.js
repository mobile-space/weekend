import { StackNavigator } from 'react-navigation';
import OptionScreen from '../screens/OptionScreen';
import CardScreen from '../screens/CardScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import WelcomeScreen from '../screens/WelcomeScreen'
import optionStack from './optionStack';

export default StackNavigator({
    Option: {
        screen: optionStack
    },
    Card: {
        screen: CardScreen
    },
    Itinerary: {
        screen: ItineraryScreen
    },
    WelcomeDetail: {
        screen: WelcomeScreen
    }
}, {
        initialRouteName: 'Option',
        mode: 'modal',
        headerMode: 'none'
    });