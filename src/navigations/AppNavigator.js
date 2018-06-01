import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { AuthStack } from '../components/Auth/AuthStack';
import { AppStack } from '../components/App/AppStack';

export const AppNavigator = createBottomTabNavigator(
    {
        //AuthLoading: AuthLoadingScreen,
        AuthStack,
        AppStack,        
    },
    {
        initialRouteName: 'AuthStack',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'AuthStack') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'AppStack') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: { backgroundColor: 'aqua' }
        }
    }
)