import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login Title',
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <Ionicons name='ios-options' size={25} color='blue'>
                    <Text>Hello</Text>
                </Ionicons>
            </View>
        );
    }
}