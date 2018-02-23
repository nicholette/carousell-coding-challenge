'use strict';

import React, { Component } from 'react';

import {
  ActivityIndicator,
  View,
  FlatList,
  Text,
} from 'react-native';

export default class Topics extends Component {
    componentDidMount() {
        this.props.fetchTopicsList(); //call our action
    }

    render() {
      let { loading, topics } = this.props;
      if (loading) {
        return (
          <View>
            <ActivityIndicator
              animating={true}
              style={[{height: 100}]}
              size="small" />
          </View>
        )
      }

      return (
        <View>
          <FlatList
            data={this.props.topics}
            extraData={this.props.topics}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderRow}/>
        </View>
      );
    }

    keyExtractor = (item, index) => index;

    renderRow = ( { item, index } ) => {
      return (
        <View>
          <Text>
            {item.name}
          </Text>
        </View>
      );
    }
};
