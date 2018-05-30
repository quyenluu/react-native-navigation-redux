import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login Title',
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
            </View>
        );
    }
}