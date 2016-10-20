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
  ['AC', '+/-', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['', 0, '.', '=']
];

class ReactCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }

  _renderInputButtons () {
      let views = [];

      for (var r = 0; r < inputButtons.length; r ++) {
          let row = inputButtons[r];

          let inputRow = [];
          for (var i = 0; i < row.length; i ++) {
              let input = row[i];

              inputRow.push(
                  <InputButton
                    value={input}
                    highlight={this.state.selectedSymbol === input}
                    key={r + "-" + i}
                    onPress={this._onInputButtonPressed.bind(this, input)}/>
              );
          }

          views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
      }

      return views;
  }

  _onInputButtonPressed (input) {
    // alert(input);
    switch (typeof input) {
        case 'number':
            return this._handleNumberInput(input)
        case 'string':
            return this._handleStringInput(input)
    }
  }

  _handleNumberInput (num) {
    let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
      inputValue: inputValue
    });
  }
  _handleStringInput (str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
          this.setState({
            selectedSymbol: str,
            previousInputValue: this.state.inputValue,
            inputValue: 0
          })
        break;
        case 'AC':
            this.setState({
              selectedSymbol: null,
              previousInputValue: 0,
              inputValue: 0
            })
          break;
        case '=':
    let symbol = this.state.selectedSymbol,
        inputValue = this.state.inputValue,
        previousInputValue = this.state.previousInputValue;

    if (!symbol) {
        return;
    }

    this.setState({
        previousInputValue: 0,
        inputValue: eval(previousInputValue + symbol + inputValue),
        selectedSymbol: null
    });
    break;
    }
  }
  render () {
      return (
        <View style={Style.rootContainer}>
            <View style={Style.displayContainer}>
              <Text style={Style.displayText}>
                🇩🇴 {this.state.inputValue}
              </Text>

              </View>
            <View style={Style.inputContainer}>
              {this._renderInputButtons()}
            </View>
        </View>
    )
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
