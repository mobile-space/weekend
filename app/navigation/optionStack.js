import { StackNavigator } from 'react-navigation';

import OptionScreen from '../screens/OptionScreen';

export default StackNavigator({
    OptionDetail: {
        screen: OptionScreen
    },
}, {
        initialRouteName: 'OptionDetail',
        headerMode: 'none'
    });