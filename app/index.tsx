import ListNews from '@/components/listNews';
import Login from '@/components/Login';
import Register from '@/components/Register';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Index = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login' 
                component={Login}
            />
            <Stack.Screen
                name='Register' 
                component={Register}
            />
            <Stack.Screen 
                name='ListNews' 
                component={ListNews}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Index;
