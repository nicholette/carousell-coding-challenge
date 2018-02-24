'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';

// This component allows the user to upvote or downvote a topic.
// For this demo, the user may upvote or downvote the same topic multiple times.
export default class Votes extends Component {

    parseVotes = (votes) => {
      let voteStr = votes.toString();
      return voteStr.match(/\d/g).length < 4 ? votes
        : voteStr.replace(/(\d){1}\d{2}$/, '.$1k');
    }

    render() {
      const { votes, onPressUpvote, onPressDownvote } = this.props;
      const parsedVotes = this.parseVotes(votes);
      const upvoteImgSrc = (require('../img/upvote_16.png'));
      const downvoteImgSrc = (require('../img/downvote_16.png'));

      return (
        <View style={styles.voteContainer}>
          <TouchableOpacity style={styles.button} onPress={onPressUpvote} title="">
            <Image
              style={styles.image}
              source={upvoteImgSrc}
            />
          </TouchableOpacity>
          <Text style={styles.voteText}>{parsedVotes}</Text>
          <TouchableOpacity style={styles.button} onPress={onPressDownvote} title="">
            <Image
              source={downvoteImgSrc}
            />
          </TouchableOpacity>
        </View>
      );
    }
};

var styles = StyleSheet.create({
    voteContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 100
    },
    button: {
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: 'center',
      width: '25%'
    },
    voteText: {
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center',
      width: '50%',
    }
});
