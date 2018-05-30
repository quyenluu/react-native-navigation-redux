import React, { Component } from 'react';
import { View } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Home/HomeScreen';
import OtherScreen from './Other/OtherScreen';

export const AppStack = createStackNavigator (
    {
        Home: HomeScreen,
        Other: OtherScreen
    },
    {
        initialRouteName: 'Home',
    }
);