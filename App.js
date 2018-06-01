import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigations/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

