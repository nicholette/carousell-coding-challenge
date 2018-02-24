'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import * as Actions from '../actions';

class NewTopicContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
};

var styles = StyleSheet.create({
    container: {
      flex: 1
    }
});

NewTopicContainer.navigationOptions = {
  title: 'New Topic',
};

function mapStateToProps(state, props) {
    return {...state.topics}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTopicContainer);
