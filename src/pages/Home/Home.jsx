import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
