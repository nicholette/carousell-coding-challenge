'use strict';

import React, { Component } from 'react';
import Votes from './votes';

import {
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList,
  Text,
} from 'react-native';

export default class Topics extends Component {
    componentDidMount() {
        // Only for demo - load mock data on first load
        if (this.props.firstLoad) {
          this.props.fetchTopicsList();
        }
    }

    keyExtractor = (item, index) => index;

    renderRow = ( { item, index } ) => {
      const { onPressVote } = this.props;
      return (
        <View style={styles.row}>
          <Text style={styles.title}>
            {item.name}
          </Text>
          <Votes
            votes={item.votes}
            onPressUpvote={() => onPressVote(index, 'upvote')}
            onPressDownvote={() => onPressVote(index, 'downvote')}
          />
        </View>
      );
    }

    render() {
      let { loading, topics, rowLimit } = this.props;
      if (loading) {
        return (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
              animating={true}
              style={[{height: 100}]}
              size="small" />
          </View>
        )
      }

      return (
        <View style={styles.flatListContainer}>
          <FlatList
            data={this.props.topics.slice(0,rowLimit)}
            extraData={this.props.topics}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderRow}/>
        </View>
      );
    }
};

var styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    flatListContainer: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingTop: 20
    },
    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        height: 80,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "600"
    }
});
