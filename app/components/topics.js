'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

var { View } = require('react-native');

import * as Actions from '../actions';

class Topics extends Component {
    componentDidMount() {
        this.props.fetchTopicsList(); //call our action
    }

    render() {
      let { topics } = this.props;
      // console.log(topics);
      return (
        <View>
        </View>
      );
    }
};

function mapStateToProps(state, props) {
    return {
        loading: state.topicsReducer.loading,
        topics: state.topicsReducer.topics
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
