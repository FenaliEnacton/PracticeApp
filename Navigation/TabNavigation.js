import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from '../Screens/Auth/SignUp';
import Login from '../Screens/Auth/Login/Login';
import Home from '../Screens/Home';
import Model from '../Componants/Modal'
import Footer from '../Componants/Footer'
import AllStores from '../Screens/AllStores';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const TabNavigation = () => {
    return (

        <Tab.Navigator tabBar={Footer}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="AllStores" component={AllStores} />
        </Tab.Navigator>

    )
}
