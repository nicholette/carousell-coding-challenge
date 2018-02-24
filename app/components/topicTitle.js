'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, TextInput } from 'react-native';

import * as Actions from '../actions';

export default class TopicTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          maxLength={255}
          multiline
          placeholder="An Amazing Title"
          style={styles.titleInput}
          onChangeText={(text) => this.props.onChangeTitle(text)}
          value={this.props.title}
        />
      </View>
    );
  }
};

var styles = StyleSheet.create({
    titleInput: {
      height: 100,
      backgroundColor: '#fff',
      fontSize: 20
    }
});
