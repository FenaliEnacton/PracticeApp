import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from '../Screens/Auth/SignUp';
import Login from '../Screens/Auth/Login/Login';
import Home from '../Screens/Home';
import Model from '../Componants/Modal';
import StoresDetails from '../Screens/StoresDetails'
import { TabNavigation } from './TabNavigation'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode={false} >
                <Stack.Screen name="Home" component={TabNavigation} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="StoresDetails" component={StoresDetails} />
                <Stack.Screen name="Model" component={Model} />


            </Stack.Navigator>


        </NavigationContainer>
    )
}

export default MainStackNavigation
