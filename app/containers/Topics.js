'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import Topics from '../components/topics';

class TopicsContainer extends Component {
  render() {
    return (
      <Topics
        {...this.props}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
