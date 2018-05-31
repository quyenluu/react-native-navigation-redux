import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { AuthStack } from '../components/Auth/AuthStack';
import { AppStack } from '../components/App/AppStack';

export const AppNavigator = createBottomTabNavigator(
    {
        //AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }
        
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }
    }
)