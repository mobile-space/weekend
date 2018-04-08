import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import optionStack from './optionStack';
import WelcomeScreen from '../screens/WelcomeScreen';
import processModal from './processModal';

export default StackNavigator({
    WelcomeDetail: {
        screen: WelcomeScreen
    },
    Process: {
        screen: processModal
    },
}, {
        initialRouteName: 'WelcomeDetail',
    });