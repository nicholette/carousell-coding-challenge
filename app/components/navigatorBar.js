'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from "react-navigation";

import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

class NavigatorBar extends Component {

    onPressNewTopic = () => {
      this.props.navigate({
        routeName: 'NewTopic'
      })
    }

    render() {
      const newTopicImgSrc = (require('../img/newTopic_48.png'));

      return (
        <View style={styles.navigator}>
          <TouchableOpacity style={styles.button} onPress={this.onPressNewTopic} title="">
            <Image
              style={styles.image}
              source={newTopicImgSrc}
            />
          </TouchableOpacity>
        </View>
      );
    }
};

var styles = StyleSheet.create({
    navigator: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#22A7F0',
      height: 64,
      width: '100%'
    },
    button: {
      alignItems: 'center',
      flex: 1
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(NavigationActions, dispatch);
}

export default connect(_ => _, mapDispatchToProps)(NavigatorBar);
