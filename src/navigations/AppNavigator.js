import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';
import { initializeListeners } from 'react-navigation-redux-helpers';
import { createBottomTabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import Ionicons from 'react-native-vector-icons/Ionicons';
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

class AppWithNavigationState  extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    componentDidMount() {
        initializeListeners('root', this.props.nav);
    }

    render() {
        const { dispatch, nav } = this.props;
        const navigation = navigationPropConstructor(dispatch, nav);
        return <AppNavigator navigation={navigation} />;
    }
}