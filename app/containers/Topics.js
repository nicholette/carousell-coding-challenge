'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import * as Actions from '../actions';
import Topics from '../components/topics';
import NavigatorBar from '../components/navigatorBar';

class TopicsContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Topics
          style={styles.topicsScroll}
          topics={this.props.topics.topics}
          loading={this.props.topics.loading}
          fetchTopicsList={this.props.fetchTopicsList}
        />
        <NavigatorBar
          style={styles.navigator}
          navigation={this.props.navigation}
          onPressNewTopic={this.props.onPressNewTopic}
        />
      </View>
    );
  }
};

var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    navigator: {
      height: 64,
    },
    topicsScroll: {
      flex: 1
    }
});

TopicsContainer.navigationOptions = {
  title: 'Topics',
};

function mapStateToProps(state, props) {
    return {
      topics: state.topics,
      navigation: state.nav
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
