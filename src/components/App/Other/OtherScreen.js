import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class OtherScreen extends Component {
    render() {
        //get param from parent HomeScreen
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO ID');
        const otherParam = navigation.getParam('otherParam', 'NO VALUE');

        return (
            <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Other Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            </View>
        );
    }
}