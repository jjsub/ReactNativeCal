// src/ReactCalculator.js

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AppRegistry
} from 'react-native';

import Style from './style';

class ReactCalculator extends Component {
    render() {
        return (
          <View style={Style.rootContainer}>
              <View style={Style.displayContainer}></View>
              <View style={Style.inputContainer}></View>
          </View>
      )
    }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
