import { StackNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen'
import optionStack from './optionStack';

export default StackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    Option: {
        screen: optionStack
    }
}, {
    initialRouteName: 'Welcome'
});