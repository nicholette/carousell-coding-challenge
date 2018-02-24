'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, TextInput } from 'react-native';
import { NavigationActions } from "react-navigation";

import Title from '../components/topicTitle';
import Button from '../components/button';
import * as Actions from '../actions';

class NewTopicContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title
          title={this.props.topics.newTitle}
          onChangeTitle={this.props.onChangeTitle}
        />
        <Button
          onPress={() => {
            this.props.createTopic();
            this.props.navigate({
              routeName: 'Topics'
            })
          }}
          text={'Create Topic'}
        />
      </View>
    );
  }
};

var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    createBtn: {
      backgroundColor: "#841584",
      color: '#fff'
    }
});

NewTopicContainer.navigationOptions = {
  title: 'New Topic',
};

function mapStateToProps(state, props) {
    return {topics: state.topics}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...Actions, ...NavigationActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTopicContainer);
