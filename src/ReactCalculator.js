// src/ReactCalculator.js

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AppRegistry
} from 'react-native';
import InputButton from './inputButton';
import Style from './style';

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class ReactCalculator extends Component {
    render() {
        return (
          <View style={Style.rootContainer}>
              <View style={Style.displayContainer}>
                <Text>
                  Heykjl;fkasj kl;asdj f;lksjd
                </Text>

                </View>
              <View style={Style.inputContainer}>
                {this._renderInputButtons()}
              </View>
          </View>
      )
    }


    _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input} key={r + "-" + i}
                      onPress={this._onInputButtonPressed.bind(this, input)}/>
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    _onInputButtonPressed(input) {
      alert(input);
    }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
