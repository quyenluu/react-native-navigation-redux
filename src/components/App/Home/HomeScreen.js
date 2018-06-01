import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'azure', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Ionicons name='ios-options' size={25} color='red'>
                    <Text>Hello Home</Text> 
                </Ionicons>
                <Button 
                    title="Go to Other Screen"
                    onPress={() => {
                        this.props.navigation.push('Other', {
                            itemId: '1',
                            otherParam: 'Hello Boy!'
                        });
                    }}
                />
            </View>
        );
    }
}