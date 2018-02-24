'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

export default class Button extends Component {
    render() {
      const newTopicImgSrc = (require('../img/newTopic_48.png'));

      return (
        <TouchableOpacity style={styles.button} onPress={this.props.onPress} title="">
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
      );
    }
};

var styles = StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#841584',
      height: 64,
      width: '100%'
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      width: '100%',
      textAlign: 'center'
    }
});
