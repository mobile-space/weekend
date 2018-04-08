import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import optionStack from './optionStack';
import welcomeStack from './welcomeStack';

export default StackNavigator({
    Intro: {
        screen: LoginScreen
    },
    Welcome: {
        screen: welcomeStack
    },
}, {
        initialRouteName: 'Intro',
        mode: 'modal',
        headerMode: 'none'
    });