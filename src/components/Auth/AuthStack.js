import React, { Component } from 'react';
import { View } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import LoginScreen  from './LoginScreen';


export const AuthStack = createStackNavigator(
    {
        Login: LoginScreen
    }
)