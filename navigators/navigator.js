import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import First from '../components/first';
import Second from '../components/second';

const container = createStackNavigator({
    first : First,
    second : Second,
})

const Navigator = createAppContainer(container);

export default Navigator;