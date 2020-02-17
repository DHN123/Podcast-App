import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from './routes';

const Tab = createBottomTabNavigator();
const TabNavigation: React.FC = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name={ routes.HOME} />
        </Tab.Navigator>
    )
}
// Thoi gian 38:32