import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from './routes';
import HomeScreen from '../components/home/HomeScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import DownloadScreen from '../components/downloads/DownloadsScreen';
import ProfileScreen from '../components/profile/ProfileScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
FeatherIcon.loadFont();
import { metrics } from '../constants/metrics'
import { theme } from '../constants/theme'

const Tab = createBottomTabNavigator();
const TabNavigation: React.FC = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            activeTintColor: theme.color.greenDarkest,
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({ color}) => <FeatherIcon name="home" size={metrics.tabIconSize} color={ color}/>
            }} 
            name={ routes.HOME } 
            component={HomeScreen}/> 
            <Tab.Screen options={{
                tabBarIcon: ({ color}) => <FeatherIcon name="inbox" size={metrics.tabIconSize} color={color}/>
            }}  
            name={ routes.LIBRARY } 
            component={LibraryScreen}/> 
            <Tab.Screen options={{
                tabBarIcon: ({ color}) => <FeatherIcon name="headphones" size={metrics.tabIconSize} color={color}/>
            }} name={ routes.DOWNLOAD } 
            component={DownloadScreen}/> 
            <Tab.Screen options={{
                tabBarIcon: ({ color}) => <FeatherIcon name="user" size={metrics.tabIconSize} color={color}/>
            }} 
            name={ routes.PROFILE } 
            component={ProfileScreen}/> 
        </Tab.Navigator>
    )
}

export default TabNavigation;
