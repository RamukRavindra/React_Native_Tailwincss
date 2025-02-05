import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login /Login';
import Register from '../screens/login /Register';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}