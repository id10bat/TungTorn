/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ComponentIOS from './Platform/ComponentIOS';
import ComponentAndroid from './Platform/ComponentAndroid';

const ComponentApp = Platform.select({
  ios: () => {
    return <ComponentIOS />
  },
  android: () => {
    return <ComponentAndroid />
  },
});

export default class App extends Component {
  render() {
    return (
      <ComponentApp />
    );
  }
}



