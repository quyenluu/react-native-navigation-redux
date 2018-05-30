import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { AuthStack } from '../components/Auth/AuthStack';
import { AppStack } from '../components/App/AppStack';

export const AppNavigator = createStackNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
)